import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createNoise2D } from 'simplex-noise';
import { createNoise3D } from 'simplex-noise';
const noise3D = createNoise3D()
const noise2D = createNoise2D()

const width = window.innerWidth, height = window.innerHeight;

// init

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;
camera.lookAt(0, 0, 0)

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
let controls = new OrbitControls(camera, renderer.domElement)

const size = 3
const division = 40

const gridHelper = new THREE.GridHelper(size, division)
scene.add(gridHelper)

let ribbon = new THREE.Mesh(
	new THREE.PlaneGeometry(1, 0.2, 100, 1).rotateX(Math.PI/2),
	new THREE.MeshNormalMaterial({side: THREE.DoubleSide})
)
scene.add(ribbon)

let vertices = ribbon.geometry.attributes.position.array

function distortionRibbon(time) {
	for (let i = 0; i <vertices.length; i+=3) {
		// vertices[i+1] = 0.1*Math.sin(vertices[i]*10 + time*2*Math.PI)
		// vertices[i+1] = 0.1*noise2D(vertices[i]*10 + 4*Math.cos(time*2*Math.PI), Math.sin(time*2*Math.PI))
		vertices[i+1] = 0.1*noise3D(vertices[i+1], vertices[i]*10 + 4*Math.cos(time*2*Math.PI), Math.sin(time*2*Math.PI))
	}
	ribbon.geometry.attributes.position.needsUpdate = true
	ribbon.geometry.computeVertexNormals()
}

// animation

function animate( time ) {
	let correctionTime = (time/10000)%2
	distortionRibbon(correctionTime)
	renderer.render( scene, camera );
}
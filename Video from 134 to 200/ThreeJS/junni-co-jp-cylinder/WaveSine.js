import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import t1 from "./images/1.jpg"
import t2 from "./images/2.jpg"
import matcap from "./images/ocean.png"

const width = window.innerWidth, height = window.innerHeight;

// init

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 100 );
camera.position.x = 4;
camera.position.y = 4;
camera.position.z = 0;
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

let geo = new THREE.PlaneGeometry(10, 10, 300, 300).rotateX(-Math.PI/2)

let material = new THREE.MeshBasicMaterial({color: 0x0000ff, side: THREE.DoubleSide, wireframe: true})

let mapcapTexture = new THREE.TextureLoader().load(matcap)
mapcapTexture.colorSpace = THREE.SRGBColorSpace
let material1 = new THREE.MeshMatcapMaterial({matcap: mapcapTexture, side: THREE.DoubleSide})

let mesh = new THREE.Mesh(geo, material1)
scene.add(mesh)

let originalPositions = [...geo.attributes.position.array]

function updateGeometry(time){
	let position = geo.attributes.position.array
	for (let i = 0; i < position.length; i+=3) {
		let x = originalPositions[i]
		let y = originalPositions[i+1]
		let z = originalPositions[i+2]

		position[i] = x
		position[i+1] = y

		position[i] -= 0.4*Math.sin(x*0.5 + time)
		position[i+1] += 0.4*Math.cos(x*0.5 + time)

		position[i] -= 0.2*Math.sin(x*2 + time*0.5)
		position[i+1] += 0.2*Math.cos(x*2 + time*0.5)

		position[i] -= 0.1*Math.sin(x*4 + time*0.5)
		position[i+1] += 0.1*Math.cos(x*4 + time*0.5)

		position[i] -= 0.05*Math.sin(x*4 + time*0.3)
		position[i+1] += 0.05*Math.cos(x*4 + time*0.3)

		position[i] -= 0.05*Math.sin(x*4 + time*0.3)
		position[i+1] += 0.05*Math.cos(x*4 + time*0.3)

		position[i] -= 0.01*Math.sin(x*4 + 2*z + time)
		position[i+1] += 0.01*Math.cos(x*4 + 2*z + time)

		position[i] -= 0.01*Math.sin(x*16 + time*0.1)
		position[i+1] += 0.01*Math.cos(x*16 + time*0.1)
	}
	geo.attributes.position.needsUpdate = true
	geo.computeVertexNormals()
}

// animation

function animate( time ) {

	updateGeometry(time/1000)

	renderer.render( scene, camera );

}
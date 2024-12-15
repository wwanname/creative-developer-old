import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createNoise2D } from 'simplex-noise';
let noise = createNoise2D()

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

let ball = new THREE.Mesh(
	new THREE.SphereGeometry(0.1, 32, 32),
	new THREE.MeshNormalMaterial()
)
scene.add(ball)

let objects = []

for (let i = 0; i < 50; i ++) {
	let mesh = ball.clone()
	objects.push({
		mesh,
		offset: Math.random(),
		index: i
	})
	scene.add(mesh)
}


// animation

function animate( time ) {
	let progress = (time / 3000)%1;
	ball.position.x = progress - 0.5

	let power = Math.sin(progress*Math.PI)

	ball.position.y =noise(time/1000, 0)*power

	objects.forEach((obj, i) => {
		let uniqueProgress = (progress + obj.offset)%1

		obj.mesh.position.x = uniqueProgress - 0.5

		let power = Math.sin(uniqueProgress*Math.PI)

		obj.mesh.position.y = noise(time/1000, obj.index)*power
	})

	renderer.render( scene, camera );

}
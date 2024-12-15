import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

const width = window.innerWidth, height = window.innerHeight;

// init

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;
camera.lookAt(0, 0, 0)

const scene = new THREE.Scene();

let mesh = new THREE.Mesh(
	new THREE.SphereGeometry(0.02, 32, 32),
	new THREE.MeshNormalMaterial()
)
scene.add( mesh );

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
let controls = new OrbitControls(camera, renderer.domElement)

const size = 3;
const divisions = 40;

const gridHelper = new THREE.GridHelper( size, divisions );
scene.add( gridHelper );

function addPoint(x, y, z) {
	let point = mesh.clone()
	point.position.set(x, y, z)
	scene.add(point)
	return point
}

let number = 300;

let objects = []

for (let i = 0; i < number; i++) {
	let theta = i/number * Math.PI * 2
	let x = Math.cos(theta)
	let y = Math.sin(theta)
	let z = 0
	let mesh = addPoint(x, y, z)

	objects.push({
		mesh,
		theta,
		random: Math.random(),
		x: Math.random()/5,
		y: Math.random()/5,
		z: Math.random()/5
	})
}

// animation

function animate( time ) {

	objects.forEach((o, i) => {
		let {mesh, theta, random, x, y, z} = o
		let newx = Math.cos(theta + time/1000) + x
		let newy = Math.sin(theta + time/1000) + y
		let newz = 0
		mesh.position.set(newx, newy, newz)
	})

	mesh.rotation.x = time / 2000;
	mesh.rotation.y = time / 1000;

	renderer.render( scene, camera );

}
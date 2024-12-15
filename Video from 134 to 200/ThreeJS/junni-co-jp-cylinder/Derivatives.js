import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import t1 from "./images/1.jpg"
import t2 from "./images/2.jpg"

const width = window.innerWidth, height = window.innerHeight;

// init

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 10 );
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 1;
camera.lookAt(0, 0, 0)

const scene = new THREE.Scene();

const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
let controls = new OrbitControls(camera, renderer.domElement)

let grid = []
let grid1 = []
let rows = 22
let s = 0.1
let geo = new THREE.BoxGeometry(s,s,s)
let geo1 = new THREE.BoxGeometry(s/3,s/3,s/3)
let dark = new THREE.MeshBasicMaterial({color: 0x000000})
let light = new THREE.MeshBasicMaterial({color: 0xffffff})

for (let i=0;i<rows;i++) {
	for (let j=0;j<rows;j++) {
		let mat = (i+j)%2 ? dark : light
		let mesh = new THREE.Mesh(geo, mat)
		mesh.position.x = (i - (rows-1)/2)*s
		mesh.position.y = (j - (rows-1)/2)*s
		mesh.position.z = -s/2
		scene.add(mesh)
		grid.push(mesh)
		for (let k = 0; k < 3; k++) {
		for (let l = 0; l < 3; l++) {
			let mat1 = (i+j+k+l)%2 ? dark : light
			let mesh1 = new THREE.Mesh(geo1, mat1)
			mesh1.position.x = (i - (rows-1)/2)*s + (k-1)*s/3
			mesh1.position.y = (j - (rows-1)/2)*s + (l-1)*s/3
			mesh1.position.z = -s/6 + 0.001
			scene.add(mesh1)
			grid1.push(mesh1)
		}}
	}
}


// animation

function animate( time ) {
	let progress=(time/2000)%1
	camera.position.z = 1- progress*2/3
	//Derivative
	camera.position.z = Math.exp(Math.log(1/3)*progress)
	grid1.forEach(g=>{
		g.scale.set(Math.min(1,progress*2),Math.min(1,progress*2),1)
	})
	renderer.render( scene, camera );

}
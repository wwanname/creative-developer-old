import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import t1 from "./images/1.jpg"
import t2 from "./images/2.jpg"

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


// animation

function animate( time ) {

	renderer.render( scene, camera );

}
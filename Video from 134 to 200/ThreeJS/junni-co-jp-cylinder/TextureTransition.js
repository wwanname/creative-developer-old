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

let shaderMaterial = new THREE.ShaderMaterial({
	uniforms: {
		uProgress: {value: 0},
		uTexture1: {value: new THREE.TextureLoader().load(t1)},
		uTexture2: {value: new THREE.TextureLoader().load(t2)}
	},
	vertexShader: `
		varying vec2 vUv;
		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		}`,
	fragmentShader: `
		uniform float uProgress;
		uniform sampler2D uTexture1;
		uniform sampler2D uTexture2;
		varying vec2 vUv;

		float rand(vec2 n) {
			return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
		}

		float noise(vec2 p){
			vec2 ip = floor(p);
			vec2 u = fract(p);
			u = u*u*(3.0-2.0*u);

			float res = mix(
				mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
				mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
			return res*res;
		}

		void main() {
			float intensity = sin(3.1415926*uProgress);
			float distortion = noise(vUv * 100.0) * 1.*intensity;

			vec2 disortedPosition = fract(
				vec2(intensity*0.5,0.) +
				vec2(vUv.x + distortion, vUv.y)
			);
			vec4 color1 = texture2D(uTexture1, disortedPosition);
			vec4 color2 = texture2D(uTexture2, disortedPosition);
			gl_FragColor = mix(color1, color2, uProgress);
		}
	`
})

let quad = new THREE.Mesh(
	new THREE.PlaneGeometry(2, 2),
	shaderMaterial
)
scene.add(quad)


// animation

function animate( time ) {

	let progress = (time/2000)%1
	progress = (Math.sin(time/2000) + 1)/2
	shaderMaterial.uniforms.uProgress.value = progress

	renderer.render( scene, camera );

}
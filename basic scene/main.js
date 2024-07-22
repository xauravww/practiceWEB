//scene
import * as THREE from 'three';
console.log(THREE)
const scene = new THREE.Scene();

//cube

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:0xff0000})

const cube = new THREE.Mesh(geometry, material)
cube.position.z = -3
cube.position.x = -1
cube.position.y = 1
scene.add(cube)
//camera
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
scene.add(camera)

const webgl = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({canvas: webgl})


renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
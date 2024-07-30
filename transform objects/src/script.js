import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')
const axesHelper = new THREE.AxesHelper( 5);

// Scene
const scene = new THREE.Scene()
const group = new THREE.Group()

scene.add(group)
group.add( axesHelper );

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color: 0x00ff00}))
const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color: 0xff0000}))
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color: 0x1002f2}))


group.add(cube1)
group.add(cube2)
cube2.position.x = 2
group.add(cube3)
cube3.position.z = 2


group.rotation.x = 0.5
/**
 * Objects
 */

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height:window.innerHeight
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 6
camera.position.y = 1
camera.position.x = 1

scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
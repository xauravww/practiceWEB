import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')
const axesHelper = new THREE.AxesHelper( 5);

// Scene
const scene = new THREE.Scene()
const group = new THREE.Group()
scene.add( axesHelper );

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
mesh.position.x =0.2
mesh.position.y =-0.6
mesh.position.z=-3
console.log("Length from center",mesh.position.length())

// mesh.position.set(1,1,1) // Directly setting position using Vector3
// mesh.position.normalize() //reset the length to 1
console.log("Length from center",mesh.position.length())

//scale
mesh.scale.set(5,0.5,2)
console.log("Length from center",mesh.position.length())
mesh.rotation.reorder('YXZ')
mesh.rotation.y = 1
mesh.rotation.x = 1.3

scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 700,
    height:400
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
camera.position.y = 1
camera.position.x = 1
camera.lookAt(1,0,0)
console.log("Length from  mesh from camera",camera.position.distanceTo(mesh.position) )
console.log("Length from  mesh from a vector",camera.position.distanceTo(new THREE.Vector3(0,0,2)) )
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
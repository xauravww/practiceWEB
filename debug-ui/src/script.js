import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import gsap from 'gsap'
import * as dat from 'dat.gui';
/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

const parameters ={
    color:0xffffff,
    spin: ()=>{
        gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y +10})
    }
}

// Scene
const scene = new THREE.Scene()
const gui = new dat.GUI();
/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: parameters.color })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// debugging
gui.add(mesh.rotation, 'x', 0, 2 * Math.PI,0.01)
gui
    .add(mesh.position, 'y')
    .min(-1.3)
    .max(1.3)
    .step(0.01)
    .name('Position Y')

gui 
    .add(mesh,'visible')
gui
   .add(mesh.scale, 'x', 0.1, 5, 0.01)
   .name('Scale X')
gui
    .add(material, 'wireframe')

gui 
    .addColor(parameters, 'color').onChange(()=>material.color.set(parameters.color))

gui 
    .add(parameters,'spin')
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
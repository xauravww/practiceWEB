import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js"

const canvas = document.querySelector("canvas.webgl")
const scene = new THREE.Scene()

const sizes ={ 
    width:window.innerWidth,
    height:window.innerHeight
}

const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color:0x808080})
)

const camera = new THREE.PerspectiveCamera(45,sizes.width/sizes.height)
camera.position.z = 3
scene.add(cube)
scene.add(camera)

const controls = new OrbitControls(camera,canvas)
controls.enableDamping = true

const cursor = {
    x:0,
    y:0
}

window.addEventListener("mousemove",(e)=>{
    console.log(e.clientX /sizes.width - 0.5 ,e.clientY/sizes.height -  0.5)
    cursor.x = e.clientX / sizes.width - 0.5
    cursor.y = - (e.clientY / sizes.height - 0.5)
})

const renderer = new THREE.WebGLRenderer(
    {canvas:canvas}
)
renderer.setSize(sizes.width,sizes.height)
// renderer.setClearColor(0xff6382)
renderer.render(scene,camera)

const clock = new THREE.Clock()
const tick = ()=>{
    const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime)
    // cube.rotation.x = cursor.y + Math.PI * 2
    // cube.rotation.y = cursor.x + Math.PI * 2
    controls.update()
    renderer.render(scene,camera)
    // camera.lookAt(mesh.position); 
    window.requestAnimationFrame(tick)
}
tick()
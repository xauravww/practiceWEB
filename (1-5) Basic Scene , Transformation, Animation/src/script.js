import gsap from "gsap";
import * as THREE from "three"
const canvas = document.querySelector('canvas.webgl');



const scene = new THREE.Scene()
const group = new THREE.Group()
scene.add(group)

const axes = new THREE.AxesHelper(2)
// scene.add(axes)

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(0.7,0.4,1),new THREE.MeshBasicMaterial({color:0xaa0021}))
cube1.position.x = -1.2



const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:0x0a0f99}))
cube2.position.x = 0
cube2.position.z = -1
cube2.position.y = -1
cube2.rotation.x = 2
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(0.6,1,1),new THREE.MeshBasicMaterial({color:0xe6a200}))
cube3.position.x = 1.2
const cube4 = new THREE.Mesh(new THREE.BoxGeometry(0.7,0.4,1),new THREE.MeshBasicMaterial({color:0x00ff0f,wireframe:true}))
cube4.position.x = 0
cube4.position.y = 1

group.add(cube1)
group.add(cube2)
group.add(cube3)
group.add(cube4)

group.scale.x = 1.2
//rotate the group and cube
group.rotation.x = 4

const size={
    height:window.innerHeight,
    width:window.innerWidth
}

const camera = new THREE.PerspectiveCamera(75,size.height/size.width)

camera.position.z = 4
scene.add(camera)
//rotate it



const renderer = new THREE.WebGLRenderer(
    {
        canvas:canvas
    }
)
renderer.setClearColor(0x260041);
const animate = function () {
    requestAnimationFrame(animate)
    group.rotation.x += 0.01
    cube2.rotation.y += 0.01
    renderer.render(scene,camera)
}

gsap.to(cube1.position,{
    // x: .0000004,
    y: .3,
    duration: .9,
    ease: "power4.out",
    repeat: -1,
    yoyo: true
})



animate()
renderer.setSize(size.width,size.height)

renderer.render(scene,camera)
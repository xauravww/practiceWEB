import * as THREE from "three"
const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene()
const group = new THREE.Group()
scene.add(group)

const axes = new THREE.AxesHelper(2)
scene.add(axes)

const cube1 = new THREE.Mesh(new THREE.BoxGeometry(0.7,0.4,1),new THREE.MeshBasicMaterial({color:0xff0000}))
cube1.position.x = -1.2

const cube2 = new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:0xff0ff0}))
cube2.position.x = 0
cube2.position.z = -1
cube2.position.y = -1
cube2.rotation.x = 2
const cube3 = new THREE.Mesh(new THREE.BoxGeometry(0.6,1,1),new THREE.MeshBasicMaterial({color:0xffff00}))
cube3.position.x = 1.2


group.add(cube1)
group.add(cube2)
group.add(cube3)

group.scale.x = 1
//rotate the group and cube
group.rotation.x = 5

const size={
    height:window.innerHeight,
    width:window.innerWidth
}

const camera = new THREE.PerspectiveCamera(75,size.height/size.width)

camera.position.z = 3
scene.add(camera)

const renderer = new THREE.WebGLRenderer(
    {
        canvas:canvas
    }
)
renderer.setSize(size.width,size.height)
renderer.render(scene,camera)
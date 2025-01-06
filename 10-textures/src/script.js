import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */

const loadingManager = new THREE.LoadingManager();

loadingManager.onStart = () => {
  console.log("Loading Manager: Loading started...");
};

loadingManager.onLoad = () => {
  console.log("Loading Manager: Loading finished...");
};
loadingManager.onProgress = () => {
  console.log("Loading Manager: Loading progress...");
};
loadingManager.onError = () => {
  console.log("Loading Manager: Error occurred...");
};

const textureLoader = new THREE.TextureLoader(loadingManager);
const colorTexture = textureLoader.load(
  "/textures/checkerboard-8x8.png",
  () => {
    console.log("textureLoader: loading finished");
  },
  () => {
    console.log("textureLoader: loading progressing");
  },
  () => {
    console.log("textureLoader: Error occurred");
  }
);
//TODO 1.learn what sRGB is
//TODO 2. learn UV coordinates
//TODO 3. learn
colorTexture.colorSpace = THREE.SRGBColorSpace
colorTexture.wrapS= THREE.MirroredRepeatWrapping
colorTexture.wrapT= THREE.RepeatWrapping

colorTexture.repeat.x = 2

colorTexture.repeat.y = 3
colorTexture.offset.x = 1.5
colorTexture.offset.y = 1.5
// colorTexture.rotation = Math.PI * 0.25
colorTexture.center.x = 0.5
colorTexture.center.y = 0.5
colorTexture.generateMipmaps = false
colorTexture.minFilter = THREE.LinearFilter
colorTexture.magFilter = THREE.NearestFilter

const alphaTexture = textureLoader.load('/textures/door/alpha.jpg')
const heightTexture = textureLoader.load('/textures/door/height.jpg')
const normalTexture = textureLoader.load('/textures/door/normal.jpg')
const ambientOcclusionTexture = textureLoader.load('/textures/door/ambientOcclusion.jpg')
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg')
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg')

/**
 * Object
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
console.log(geometry.attributes);
const material = new THREE.MeshBasicMaterial({ map:colorTexture});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.x = 1;
camera.position.y = 1;
camera.position.z = 1;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
    renderer.setClearColor(0x466b7a);
  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();

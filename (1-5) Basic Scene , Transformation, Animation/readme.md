## Three.js Scene Setup

This script sets up a basic 3D scene using the Three.js library. Below is a breakdown of the key components and their configurations:

### Key Components

1. **Scene Initialization**
   - A new Three.js scene is created using `new THREE.Scene()`.

2. **Canvas Selection**
   - The canvas element with the class `webgl` is selected from the DOM to render the 3D scene.

3. **Group and Axes Helper**
   - A **Group** is used to manage multiple objects collectively. A group allows you to combine multiple objects and transform them as a whole (i.e., apply position, rotation, and scaling to all objects within the group simultaneously).
   - An `AxesHelper` is added to the scene to visualize the axes (X, Y, Z) with a length of 2 units.

4. **Mesh Creation**
   - Three cubes (`cube1`, `cube2`, `cube3`) are created using `THREE.BoxGeometry` and `THREE.MeshBasicMaterial`.
   - Each cube is assigned a different color and positioned at specific coordinates within the scene.

5. **Camera Setup**
   - A `PerspectiveCamera` is configured with a field of view of 75 degrees and an aspect ratio based on the window size.
   - The camera is positioned along the Z-axis at a distance of 3 units from the origin.

6. **Renderer Configuration**
   - A `WebGLRenderer` is initialized to render the scene onto the selected canvas.
   - The renderer is set to match the window's width and height.

7. **Rendering**
   - The scene is rendered from the perspective of the camera using `renderer.render(scene, camera)`.

### Transformations (Scale, Position, etc.)

- In addition to creating and positioning objects, transformations like **scale**, **rotation**, and **translation** can be applied to objects within the scene. 
  - **Positioning**: You can set an object's position using `object.position.set(x, y, z)`, where `x`, `y`, and `z` are the coordinates in the 3D space.
  - **Scaling**: To scale an object, you can use `object.scale.set(x, y, z)` where `x`, `y`, and `z` represent the scaling factors in each direction.
  - **Rotation**: You can rotate an object by modifying its rotation properties like `object.rotation.x`, `object.rotation.y`, and `object.rotation.z` (in radians).

### Using Groups

A **Group** in Three.js is an object that can contain multiple 3D objects (meshes, lights, etc.), allowing you to apply transformations (like translation, rotation, and scale) to all objects inside the group at once. Instead of applying transformations to individual objects, you can group them together and apply the transformation to the entire group. This can help in managing and manipulating complex scenes.

- To create a group, you use `const group = new THREE.Group();`.
- You can add objects to the group using `group.add(object1, object2, ...)`.
- Any transformation applied to the group will affect all objects within it. For example:
  - **Positioning the Group**: `group.position.set(x, y, z)`
  - **Scaling the Group**: `group.scale.set(x, y, z)`
  - **Rotating the Group**: `group.rotation.set(x, y, z)`

This makes it easier to manage multiple objects as a single entity, for example, a group of cubes that you want to rotate together or move as one.

### Usage

- Ensure that the HTML file includes a canvas element with the class `webgl`.
- The script dynamically adjusts the rendering size based on the window dimensions.

### Dependencies

- This script requires the Three.js library to be included in your project.

### Notes

- This setup is a basic example and can be expanded with additional geometries, materials, lighting, animations, and transformations to create more complex scenes.
- For animations, you can use libraries like GSAP (GreenSock Animation Platform) to create smooth and complex animations. GSAP can be used to animate various properties of Three.js objects over time.
- `requestAnimationFrame` is a browser function that allows you to synchronize your animations with the browser's refresh rate, resulting in smoother animations. You can use it to create animation loops that update the scene on each frame. 

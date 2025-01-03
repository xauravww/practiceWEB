# Three.js Controls

## OrbitControls

The `OrbitControls` script allows the camera to orbit around a target. 

**Usage:**

### 1. Import:

```js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
```

## 2. Instantiation

```javascript
const controls = new OrbitControls(camera, canvas);
```

## 3. Enable damping (optional, for smoother control):

```js
controls.enableDamping = true; 
```

### Controls

- Left mouse button or touch: Rotate the camera around the target.
- Middle mouse button or touch: Pan the camera.
- Scroll wheel or touch: Zoom in and out.

## Custom Mouse Controls
You can create custom controls using event listeners. Here's an example to rotate an object based on mouse movement:

### 1. Track mouse position:

```js
const cursor = {
    x: 0,
    y: 0
};

window.addEventListener("mousemove", (e) => {
    cursor.x = e.clientX / sizes.width - 0.5;
    cursor.y = - (e.clientY / sizes.height - 0.5); 
});

```
### 2. Apply rotation in the animation loop:

```js
const tick = () => {
    // ...
    cube.rotation.x = cursor.y + Math.PI * 2; // Rotate on x-axis
    cube.rotation.y = cursor.x + Math.PI * 2; // Rotate on y-axis
    // ...
};
```
### 3.Explanation:

We normalize the mouse coordinates to a range of -0.5 to 0.5.We then apply these normalized values to the object's rotation.
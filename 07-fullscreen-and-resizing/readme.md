# Notes on Fullscreen and Resizing in Three.js

This document outlines the key concepts and code snippets for implementing fullscreen functionality and handling window resizing in a Three.js application.

## I. Fullscreen Functionality

### 1. Entering Fullscreen

- Target the Canvas: Request fullscreen mode on the <canvas> element that hosts your Three.js scene using canvas.requestFullscreen().
- Cross-Browser Compatibility:  Employ feature detection and browser prefixes to ensure compatibility across different browsers:

```js
if (canvas.requestFullscreen) {
    canvas.requestFullscreen();
} else if (canvas.webkitRequestFullscreen) { 
    canvas.webkitRequestFullscreen();
} else if (canvas.mozRequestFullscreen) {
    canvas.mozRequestFullscreen();
} else if (canvas.msRequestFullscreen) { 
    canvas.msRequestFullscreen();
}
```

### 2. Exiting Fullscreen

- Use document.exitFullscreen():  Exit fullscreen mode by calling document.exitFullscreen(). This method is associated with the document object, reflecting that fullscreen is a browser-level state.
- Handle Browser Variations:  Address browser prefixes for exiting fullscreen:

```js
if (document.exitFullscreen) {
    document.exitFullscreen();
} else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
} else if (document.mozCancelFullScreen) { 
    document.mozCancelFullScreen();
} else if (document.msExitFullscreen) { 
    document.msExitFullscreen();
}
```
### 3. Checking Fullscreen Status

- Utilize document.fullscreenElement: Determine if the browser is in fullscreen mode using document.fullscreenElement. It returns the element in fullscreen or null if not.
- Account for Browser Prefixes: Consider prefixed versions like document.webkitFullscreenElement for comprehensive browser support.

### 4. Implementing a Toggle

Combine the above logic to create a fullscreen toggle, often triggered by a user double-click event:

```js
window.addEventListener("dblclick", () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;

    if (!fullscreenElement) {
        // Enter fullscreen 
        // ... (Code to enter fullscreen) 
    } else {
        // Exit fullscreen
        // ... (Code to exit fullscreen) 
    }
});
```

## II. Handling Window Resizing

### 1.  Listen for Resize Events:
- Attach an event listener to the window object to detect resize events:

```js
window.addEventListener('resize', () => {
    // Update scene elements here...
});
```

### 2. Update Canvas Size:

- Adjust the width and height properties of your `<canvas>` element using the new window.innerWidth and window.innerHeight values.

### 3.  Update Camera Aspect Ratio:

- Maintain correct scene proportions by updating the aspect property of your THREE.PerspectiveCamera to match the new canvas aspect ratio.
- Call camera.updateProjectionMatrix() to recalculate the camera's projection matrix after modifying its properties:

```js
camera.aspect = canvas.clientWidth / canvas.clientHeight;
camera.updateProjectionMatrix();
```

### 4. Update Renderer Size:
- Resize the Three.js renderer using renderer.setSize() to match the updated canvas dimensions:
```js
renderer.setSize(canvas.clientWidth, canvas.clientHeight);
```
5. (Optional) Adjust Pixel Ratio:
- For optimal sharpness on high-DPI displays, consider using renderer.setPixelRatio() with window.devicePixelRatio:
  
```js
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); 
```

By following these guidelines, you can enhance your Three.js applications with seamless fullscreen experiences and responsive behavior across various screen sizes and resolutions.
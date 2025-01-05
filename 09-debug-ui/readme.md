# Lil-gui Notes

This file uses the `lil-gui` library to create a graphical user interface (GUI) for debugging and tweaking Three.js objects and parameters in real-time.

## Key Parts

1. **Initialization:**
   - Import the library: `import GUI from 'lil-gui';`
   - Create a new GUI instance: 
     ```javascript
     const gui = new GUI({
         width: 300,
         title: 'Nice debug UI',
         closeFolders: false
     });
     ```

2. **Hotkeys:**
   - Hide/show the GUI using 'h' and 's' keys:
     ```javascript
     document.addEventListener('keydown', (event) => {
         if (event.key == 'h') gui.hide();
         else if (event.key == 's') gui.show();
     });
     ```

3. **GUI Controls:**
   - **Folder:** `const folder = gui.addFolder('Awesome Cube');`
   - **Boolean Toggle:** 
     ```javascript
     folder.add(debugObject, 'toggleWireframe').name('Toggle Wireframe').onChange(() => {
         mesh.material.wireframe = !debugObject.toggleWireframe;
     });
     ```
   - **Number Slider:** 
     ```javascript
     folder.add(mesh.position, 'x', 0, 2, 0.2).name('PositionX');
     ```
   - **Color Picker:** 
     ```javascript
     folder.addColor(debugObject, 'color').name('color').onChange(() => {
         material.color.set(debugObject.color);
     });
     ```
   - **Number Slider with Min/Max/Step:** 
     ```javascript
     folder.add(debugObject, 'subdivision')
         .min(1)
         .max(100)
         .step(2)
         .onFinishChange(() => {
             // ... update geometry based on subdivision
         });
     ```
   - **Button:**
     ```javascript
     folder.add(debugObject, 'spin'); 
     ```

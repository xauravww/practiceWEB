# Three.js Textures: A Deep Dive with Examples

This markdown covers the essentials of using textures in Three.js, along with explanations, types, and examples.

## 1. The Basics: What Are Textures?

- Textures are images that add detail and realism to 3D objects.
- They control color, transparency, surface details, and how light interacts with materials.
- Think of applying wrapping paper to a plain box - the paper's pattern and texture transform the object's appearance.

# 2. Loading Textures with TextureLoader

```javascript
import * as THREE from 'three';

// ... other code ...

const loadingManager = new THREE.LoadingManager();
// Optional: Set up loading manager callbacks (onStart, onLoad, onProgress, onError)

const textureLoader = new THREE.TextureLoader(loadingManager);
const myTexture = textureLoader.load('/path/to/image.jpg'); 
```

- TextureLoader: Three.js's tool for loading image files and converting them into textures.
- loadingManager (optional): Lets you track loading progress and handle errors.
- `.load() method:  Loads the image at the specified path. You can provide callback functions for loading events (e.g., when the texture finishes loading).

Example: Loading a brick wall texture

```javascript
const brickTexture = textureLoader.load('/textures/brick_wall.jpg');
```

## 3. Applying Textures to Materials

- Textures are applied as properties of Three.js materials.
- The most common material is MeshStandardMaterial.

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ 
    map: brickTexture, // Apply the brick texture as the base color (diffuse map)
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
```

## 4. Texture Properties: Controling Appearance and Behavior

Three.js textures have several key properties that affect how they are mapped and displayed:

### 4.1. colorSpace:

- Purpose: Ensures that the colors in your texture are displayed accurately.
- Important: Images are usually stored in the sRGB color space (for monitors), while 3D rendering often uses linear color space.
- Setting:

```javascript
myTexture.colorSpace = THREE.SRGBColorSpace; 
```

### 4.2. wrapS and wrapT:

- Purpose: Control how the texture repeats or extends horizontally (wrapS) and vertically (wrapT) when its UV coordinates go beyond 0 to 1 (tiling).
- Wrapping Modes:
  - THREE.RepeatWrapping (default):  Tiles the texture repeatedly.
  - THREE.MirroredRepeatWrapping:  Mirrors the texture with each repetition for a seamless effect.
  - THREE.ClampToEdgeWrapping: Extends the edge pixels of the texture to fill the extra space.
  - THREE.RepeatWrapping: Uses the very last pixel to fill extra space (can cause noticeable edges).

Example: Mirroring a wood texture:

```javascript
woodTexture.wrapS = THREE.MirroredRepeatWrapping;
woodTexture.wrapT = THREE.MirroredRepeatWrapping;
```

### 4.3. repeat.x and repeat.y:

### Purpose: Control how many times the texture repeats along the X (horizontal) and Y (vertical) axes.

Example: Tiling a small pattern multiple times:

```javascript
patternTexture.repeat.x = 4; // Repeat 4 times horizontally
patternTexture.repeat.y = 2; // Repeat 2 times vertically
```

### 4.4. offset.x and offset.y:

- Purpose: Shifts (offsets) the texture's starting position along the X and Y axes. Values range from 0 to 1.

Example: Offsetting a texture slightly:

```javascript
myTexture.offset.x = 0.25; // Shift the texture 25% to the right
```

### 4.5. rotation:

- Purpose: Rotates the texture around its center point. Values are in radians.
- Example:
  ```javascript
    myTexture.rotation = Math.PI * 0.25; // Rotate 45 degrees
```

### 4.6. center:

- Purpose:  Specifies the pivot point for rotation. 
- Values range from 0 to 1.
Example:
```javascript
myTexture.center.x = 0.5; // Set the rotation center to the middle of the texture
```

### 4.7. generateMipmaps:

- Purpose: Controls whether Three.js generates mipmaps for this texture
- Mipmaps:  Smaller pre-calculated versions of the texture used for performance and to reduce artifacts at a distance.
- Setting:myTexture.generateMipmaps = false; (use if you need absolute control, for pixel art, etc.)

## 4.8. minFilter and magFilter:

- Purpose:  Control how the texture is filtered (how pixels are chosen) when scaled down (minified) or up (magnified).
- Minification Filtering (minFilter):
  - THREE.NearestFilter:  Fastest, blockiest. Good for pixel art. 
  - THREE.LinearFilter: Smoother, but more demanding.
  -  THREE.MipMapNearestFilter:  Uses mipmaps, faster but less smooth. 
  -  THREE.MipMapLinearFilter:  Uses mipmaps, generally the best balance.
- Magnification Filtering (magFilter):
  -  THREE.NearestFilter:  Pixelated when zoomed in. 
  -  THREE.LinearFilter:  Smoother upscaling, typically preferred.

Example: Preserving pixel art style:

```javascript
pixelArtTexture.generateMipmaps = false;
pixelArtTexture.minFilter = THREE.NearestFilter; 
pixelArtTexture.magFilter = THREE.NearestFilter; 

```

## 5. Different Types of Texture Maps

- Diffuse/Color Map (map): The base color of your material (e.g., the brick texture).
- Alpha Map (alphaMap):  Grayscale image for transparency. White = opaque, black = transparent.Height Map (displacementMap):  Grayscale image for surface details (bumps, grooves).
- Normal Map (normalMap):  Modifies light calculations for more detailed lighting without extra geometry.
- Ambient Occlusion Map (aoMap): Adds subtle shadows and depth based on light blocking.Metalness Map 
- (metalnessMap): Defines how metallic the material is.Roughness Map (roughnessMap):  Controls the surface roughness (smooth vs. rough reflections).

This detailed overview should give you a solid understanding of textures in Three.js. Remember to experiment with different settings and map types to achieve the desired look for your 3D objects and scenes!
# Color Shade Generator

This project is a color generator that allows you to generate colors shades and copy the hexadecimal code to use in your projects.


![Project Gif](https://res.cloudinary.com/drvntsbpo/image/upload/v1705765811/Animation_f5wbjf.webp)

This project is live on [https://xauravww-color-shader.netlify.app/](https://xauravww-color-shader.netlify.app/).

## Features

- Generate colors shades
- Copy color code to clipboard
- Fully Responsive Design

## Technologies Used

- ReactJS
- CSS

## Installation

1. Clone the repository: `git clone https://github.com/your-username/color-generator.git`
2. Open the project folder: `cd color-generator`
3. Open the `index.html` file in your web browser.

## Usage

1. Click the "Generate Color" button to generate color shades.
2. The color's hexadecimal code will be displayed in the input field.
3. Enter any CSS color name, hexadecimal code, RGB, RGBA, HSL, or HSLA value in the input field.
4. For best results, use 10 as the number of shades. More shades will result in less color variations.
5. Click the color box to copy its hexadecimal code to your clipboard.
6. Click outside the info box to close it. (in case it is  opened)

## Installation

#### Step 1: Clone the subdirectory of this repository
```git svn clone https://github.com/xauravww/practiceWEB/trunk/react-projects/04-color-shades-generator/```

#### Step 2: Install the dependencies
```npm install```

#### Step 3: Start the server
```npm run dev```

#### Step 4: Open the webapp
 Open `http://localhost:4173/` in your browser to view the app.


## Folder Structure

- `src/`: Contains the main source code for the React app.
  - `components/`: Houses main reusable components used in the app.
    - `Card/`: Component for displaying a single color box.
   
  - `App.js`: Main component representing the entire application.


## Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [values.js](https://www.npmjs.com/package/values.js) - A library for getting tints and shades of a CSS color.
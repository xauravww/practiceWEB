# React Hipster Ipsum Generator

Welcome to the React Hipster Ipsum Generator! This React application provides a trendy alternative to the conventional Lorem Ipsum, offering users the ability to generate hipster-centric placeholder text. Users can choose between generating paragraphs or sentences, and the app incorporates a sleek loading spinner for a seamless user experience during data fetching.

This WebApp is live on: [React Hipster Ipsum Generator](https://xauravww-hipster-ipsum.netlify.app)

## Technologies Used

- React
- CSS
- react-loader-spinner

## Features

- Fetches hipster-centric placeholder text from the Hipster Ipsum API.
- Displays a loading spinner while data is being fetched.
- Gracefully handles errors and shows an error message if the data retrieval encounters issues.
- Allows users to choose between generating hipster paragraphs or sentences.
- User-friendly interface with a form to select the type and specify the number.
- Responsive design for a seamless experience on various devices.

## Folder Structure

- `src/`: Contains the main source code for the React app.
  - `components/`: Houses main reusable components used in the app.
    - `Loader/`: Component for displaying a loading spinner.
    - `ParagraphGenerator/`: Component for generating hipster paragraphs.
    - `SentenceGenerator/`: Component for generating hipster sentences.
  - `App.js`: Main component representing the entire application.

## Usage

1. Upon starting the app, it fetches hipster-centric placeholder text from the Hipster Ipsum API.
2. A loading spinner is displayed while the data is being fetched.
3. If an error occurs during the fetch, an error message is shown.
4. Once the data is loaded, the app provides options to generate hipster paragraphs or sentences.
5. Users can use the form to select the type and specify the number of paragraphs or sentences.
6. Click the "Generate" button to view the hipster-centric placeholder text.
7. The generated text can be copied and used in various projects.

## Components

- `App`: The main component orchestrating the overall structure of the app.
- `Loader`: Displays a loading spinner during data fetching.
- `ParagraphGenerator`: Generates hipster paragraphs based on user input.
- `SentenceGenerator`: Generates hipster sentences based on user input.

## Installation

1. Clone the subdirectory of this repository.
   `git svn clone https://github.com/xauravww/practiceWEB/trunk/react-projects/03-Hipster-Ipsum-Generator`

2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the app.
4. Open `http://localhost:4173/` in your browser to view the app.

## Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) - A library for adding loading spinners.

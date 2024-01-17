# React Tours Dashboard App

Welcome to the React Tours Dashboard App! This is a React application that allows users to view a list of tours, read more about each tour, and mark tours as "Not Interested." The app includes a loading spinner for a seamless user experience during data fetching.

This WebApp is live on :
https://xauravww-tour-app.netlify.app

## Technologies Used

- React
- CSS
- react-loader-spinner

## Features

- Fetches tour data from the an API.
- Displays a loading spinner while data is being fetched.
- Handles errors gracefully and displays an error message if the data cannot be fetched.
- Allows users to view tour details, read more information, and mark tours as "Not Interested."

## Folder Structure

- `src/` : Contains the main source code for the React app.
  - `components/` : Houses the main components used in the app.
    - `Loader/` : Component for displaying a loading spinner.
    - `Card/` : Component for displaying individual tour cards.
  - `pages/` : Contains higher-level components for specific pages.
    - `CardsDashboard/` : Component for displaying the dashboard with tour cards.
  - `App.js` : Main component representing the entire application.

## Usage

1. Upon starting the app, it will fetch tour data from the Course API.
2. A loading spinner is displayed while the data is being fetched.
3. If an error occurs during the fetch, an error message is displayed.
4. Once the data is loaded, the app displays a list of tours with their details.
5. Users can expand the tour information by clicking "Read More" or collapse it with "Show Less."
6. Tours can be marked as "Not Interested" by clicking the corresponding button.
7. It is fully responsive.

## Components

- `App` : The main component that orchestrates the overall structure of the app.
- `Loader` : Displays a loading spinner while data is being fetched.
- `CardsDashboard` : Renders the dashboard containing tour cards.
- `Card` : Displays individual tour information, allowing users to read more and mark tours as "Not Interested."

## Installation

1. Clone the subdirectory of this repository.
`git svn clone https://github.com/xauravww/practiceWEB/trunk/react-projects/02-tours`

2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the app.
4. Open `http://localhost:4173/` in your browser to view the app.

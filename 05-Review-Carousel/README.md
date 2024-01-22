
# Review Carousel

## Overview

This project implements a simple review carousel application using React. It allows users to navigate through reviews, view details about each reviewer, and includes a "Surprise Me" button to show a random review.


This project is live on 
https://xauravww-reviews.netlify.app


![Reviews App](https://res.cloudinary.com/drvntsbpo/image/upload/v1705943236/ReviewsApp_lqxpn5.webp)

## Project Structure
The project consists of the following main components:

1. `App Component (App.js)`:

    Manages the state for the current review index using React's useState.
    Displays the main structure of the application, including the header and the Box component for showing reviews.
2. `Box Component (Box.js)`:

    Represents a single review box.
    Receives data (name, job, image, etc.) as props and displays it in a styled box.
    Includes navigation buttons to move to the previous or next review and a "Surprise Me" button.

## Technologies Used
React: A JavaScript library for building user interfaces.

## Installation

1. Clone the subdirectory of this repository.
   `git svn clone https://github.com/xauravww/practiceWEB/trunk/react-projects/05-Review-Carousel`

2. Run `npm install` to install the dependencies.
3. Run `npm run dev` to start the app.
4. Open `http://localhost:4173/` in your browser to view the app.

## Project Structure
- `/src`
- `/assets`: Contains SVG logos and other static assets.
- `/components`: Holds React components, including the Box component.
- `/utils:` Stores data used by the application.

## How to Use
- Upon running the application, you will see a header with the title "Our Reviews" and a review box below it.
- Navigate through reviews using the left and right arrow buttons.
- Click the "Surprise Me" button to display a random review.

## Additional Notes

Feel free to explore, modify, and expand upon this project to suit your specific requirements!
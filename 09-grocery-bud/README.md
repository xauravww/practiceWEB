# Grocery Bud
This project is a simple todo list named "Grocery Bud" that allows users to add, edit, mark as done, and delete grocery items. It is built using React, Tailwind CSS, and Redux Toolkit. I chose to build this small app using Redux Toolkit to showcase my skills in using Redux Toolkit for state management in React applications.

![Grocery-Bud-Img](https://res.cloudinary.com/drvntsbpo/image/upload/v1711396632/grocery-bud_mlfowb.webp)

# This project is live on [https://grocery-bud-xauravww.onrender.com/](https://grocery-bud-xauravww.onrender.com/).

## Features
- Add new grocery items to the list
- Edit existing grocery items
- Mark grocery items as done
- Delete grocery items
- Save and load grocery list from local storage
- User-friendly interface with Tailwind CSS styling

## Technologies Used
- React
- Tailwind CSS
- Redux Toolkit
  
## Installation
```
Step 1: Clone the project subdirectory
git -b react-projects clone --depth 1 --no-checkout https://github.com/xauravww/practiceWEB.git
cd  practiceWEB
git sparse-checkout set 09-grocery-bud
git checkout

Step 2: Navigate to the project directory
cd 09-grocery-bud

Step 3: Install the dependencies
npm install

Step 4: Start the development server
npm start

Step 5: Open the webapp
Open http://localhost:5173/ in your browser (or whatever i.e. shown in the terminal) to view the app.
```

# Usage
- Enter the name of the grocery item in the input field.
- Click the "Add" button or press "Enter" to add the item to the list, for both edited and new tasks.
- To edit an item, click the edit icon next to the item,make your changes in the input field, and click the "Update" button.
- To mark an item as done, click on the item's name.
- Clicking it again will mark it as not done.
- To delete an item, click the delete icon next to the item.

Your grocery list will be saved locally, so you can close the browser and come back to it later without losing your list.
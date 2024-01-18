# Form Validation MiniProject

## Overview

This documentation provides an overview of the form validation script used with an HTML form. The script is designed to validate user input in real-time and display error messages if any of the validation criteria are not met. The form includes fields for a username, password, and confirmation of the password, along with a checkbox for accepting terms and conditions.

This project is live on
https://xauravww-form-validation.netlify.app

## File Structure

- **index.html**: Contains the HTML structure of the form and includes the necessary stylesheet and script files.
- **style.css**: Stylesheet file for the form layout.
- **script.js**: JavaScript file with the form validation logic.

## Form Elements

The HTML form consists of the following elements:

- **Username**: Input field for the username.
- **Password**: Input field for the password.
- **Confirm Password**: Input field to confirm the password.
- **Terms and Conditions**: Checkbox to accept terms and conditions.
- **Submit Button**: Button to submit the form.

## Validation Logic

The JavaScript file (`script.js`) contains the validation logic for the form. The script performs the following checks:

1. **Required Fields**: Ensures that all fields (username, password, and confirm password) are filled.
2. **Username Length**: Checks if the username is at least 6 characters long.
3. **Password Length**: Checks if the password is at least 8 characters long.
4. **Password Match**: Verifies if the password and confirm password fields match.
5. **Terms and Conditions**: Ensures that the terms and conditions checkbox is checked.

## Use Locally
First clone its subdirectory 

```git svn clone https://github.com/xauravww/practiceWEB/trunk/mini-projects/form-validation-miniproject```

## Usage

1. Open the `index.html` file in a web browser.
2. Fill in the form fields and observe real-time validation feedback.
3. If the form is valid, clicking the "Create Account" button will redirect to the `success.html` page.

## Additional Notes

- The error messages are displayed in a list format beneath the form.
- The `script.js` file uses event listeners to trigger validation on form submission and field changes.

Feel free to customize.
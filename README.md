# Database Testing Web Application

This repository contains the source code for a web application designed for database testing. It includes both frontend and backend components.

# Overview
The frontend of the application is built using HTML and styled with CSS. It features a user sign-up form designed to collect information from users. 



# Backend
Overview
The backend is implemented using Node.js, Express, and MongoDB. It handles HTTP requests, connects to a MongoDB Atlas database, and stores user sign-up information.

Features
Express Server: Utilizes the Express framework to handle HTTP requests and responses.

MongoDB Integration: Connects to a MongoDB Atlas database to store user sign-up information.

API Endpoints:

POST /sign_up: Accepts form data from the user sign-up form, stores it in the MongoDB database, and redirects to a completion page.

GET /: Serves the main page of the web application.

# Features
User Sign-up Form: The HTML file (index.html) includes a form that collects information such as name, age, a brief description, likes, and gender.

Styling with CSS: The form is styled using CSS, providing an aesthetically pleasing and user-friendly interface. Background images, fonts, and layout adjustments enhance the visual experience.



Fill in the required fields, such as name, age, description, likes, and gender.

Click the submit button to send the form data to the server.

Design Credits
# UI Design: Aariya
# Coding: Kunal
# Tech Stack/Tech Guide: Atul Sir



## Deployment

To deploy this project run

```bash
  npm run deploy
```

Configure MongoDB Connection:

Replace the placeholder in the atlasUri variable with your MongoDB Atlas connection string.

Run the application:
```bash
  node index.js

```


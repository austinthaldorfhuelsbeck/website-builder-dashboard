# Content & Event Dashboard

## Overview

The Content & Event Dashboard is a full-stack application designed to empower content creators to manage blogs and events seamlessly. Developed for Cathy Loerzel (https://cathyloerzel.com), this dashboard facilitates real-time updates to her public website, enabling efficient content management and event scheduling. The project leverages a modern JavaScript stack, incorporating React, Express, Knex, Node.js, PostgreSQL, and Firebase, to deliver a dynamic, user-friendly admin dashboard.

### Demo

Check out the live demo: [Content & Event Dashboard Demo](https://website-builder-dashboard.vercel.app)

*Note: Screenshots and additional visual aids will be added soon.*

## Key Features

- **Dynamic Content Management:** Create, read, update, delete, and list blog posts and events.
- **Custom Categorization:** Support for custom post categories, topics, and event categories.
- **Secure Authentication:** Utilizes Firebase for secure user authentication and file storage.
- **Real-time Updates:** Changes reflect immediately on the live website, enhancing content dynamism.
- **Adaptive UI:** Tailwind CSS ensures a responsive and intuitive design.

## Technologies Used

- **Frontend:** React, Tailwind CSS
- **Backend:** Express, Knex, Node.js, PostgreSQL
- **Authentication and Storage:** Firebase

## Challenges and Solutions

### API Flexibility and Validation
- **Challenge:** Implementing a flexible API that supports listing by category or topic while ensuring future extensibility and maintaining input validation.
- **Solution:** Utilized URL query parameters for filtering and `res.locals` in Express for passing data between middleware and controller functions, achieving both flexibility and robust validation.

### Reusable Component Design
- **Challenge:** Designing components to display various objects within a grid view and their corresponding forms, without duplicating code.
- **Solution:** Developed custom React hooks (`useGridItem`, `useUpload`, `useForm`) to handle asynchronous loading, file uploads, and form operations, enhancing component reusability and reducing complexity.

## Security Measures

To ensure the integrity and security of the dashboard, the application implements several key measures:
- Access control with Firebase authentication, restricting dashboard use to authorized users only.
- Secure file uploads and data modifications, with Firebase rules ensuring that only authenticated users can perform actions.
- Separation of production and demo environments, with dedicated databases and storage to protect live data.

## Future Enhancements

The project's roadmap includes transforming the dashboard into a more generalized website builder, expanding user customization options, and enhancing security for user-generated content. These improvements aim to broaden the application's utility and user base.

## Client Testimonial

*"The Content & Event Dashboard has revolutionized how I manage my website. It's intuitive, efficient, and lets me focus on creating content rather than dealing with technical details. A game-changer for my online presence!"* - Cathy Loerzel

## Lessons Learned

This project was a valuable exercise in full-stack development, from managing client expectations to implementing a secure, user-friendly content management system. Key takeaways include the importance of flexible API design, the benefits of custom React hooks for DRY code, and the critical nature of security in web applications.

## Getting Started

This section will guide you through setting up the project locally.

### Installing Dependencies

Navigate into the project directory and run `npm install` to install the necessary dependencies.

### Running the Development Server

Start the development server by running `npm run dev`.

### Setting Up Environment Variables

#### For the API

Create a `.env` file in the root directory of the project. This file will contain your local environment variables needed to connect the API to your Postgres database. Add the following variables to the `.env` file:
    `DATABASE_HOST_DEVELOPMENT=<Your Database Host>`
    `DATABASE_USER_DEVELOPMENT=<Your Database User>`
    `DATABASE_PASSWORD_DEVELOPMENT=<Your Database Password>`

Replace `<Your Database Host>`, `<Your Database User>`, and `<Your Database Password>` with your actual database host, user, and password.

#### For the client

Navigate to the `client` directory and create another `.env` file. This file will contain the environment variables required to connect the React app to Firebase. Add the following variables to this `.env` file:
    `REACT_APP_FIREBASE_API_KEY=<Your Firebase API Key>`
    `REACT_APP_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>`
    `REACT_APP_FIREBASE_PROJECT_ID=<Your Firebase Project ID>`
    `REACT_APP_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>`
    `REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>`
    `REACT_APP_FIREBASE_APP_ID=<Your Firebase App ID>`
    `REACT_APP_FIREBASE_MEASUREMENT_ID=<Your Firebase Measurement ID>`

Again, replace the placeholders with your actual Firebase configuration values.
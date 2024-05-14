# Instagram Clone

This is an Instagram clone built with ReactJS, Tailwind CSS, Firebase Authentication, and Chakra UI.

## Description

This project aims to replicate the core functionalities and user interface of the popular social media platform Instagram. Users can sign up, log in, upload photos, follow other users, like and comment on posts, and explore their feed.

## Features

- **User Authentication**: Allows users to sign up and log in securely using Firebase Authentication.
- **Image Upload**: Enables users to upload photos to their profile.
- **Follow System**: Allows users to follow/unfollow other users and view their posts in the feed.
- **Like & Comment**: Users can like and comment on posts.
- **Explore Feed**: Users can explore a feed of posts from users they follow.

## Tech Stack

- **Frontend**: ReactJS, Chakra UI
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Authentication
- **Database**: Firebase Firestore

## Getting Started

### Prerequisites

- Node.js installed on your local machine
- A Firebase project set up with Firestore and Authentication enabled

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
2.Navigate to the project directory:

    .cd instagram-clone

3. Install dependencies:

       .npm install

4.Create a .env file in the root directory and add your Firebase configuration:

      .REACT_APP_FIREBASE_API_KEY=your-api-key
      REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
      REACT_APP_FIREBASE_PROJECT_ID=your-project-id
      REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
      REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
      REACT_APP_FIREBASE_APP_ID=your-app-id

  5.Start the development server:

       npm start

 6. Open your browser and navigate to http://localhost:3000 to view the app.

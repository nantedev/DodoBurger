# Dodo Burger 🍔

Dodo Burger is a web application built using **React with TypeScript**. It provides a seamless user experience for browsing and managing products. The project integrates **Firebase** for authentication and real-time database storage, ensuring data persistence.

## Features 🚀

- **User Authentication**
- **Product Browsing**: Users can view available products.
- **Shopping Cart**: Add/delete items to the cart.
- **Admin Mode**: If the administrator mode is enabled, users can:
  - Add new products.
  - Modify existing products.
  - Delete products.

## Technologies Used 🛠️

- **React (with TypeScript)**
- **Firebase** (Authentication & Firestore Database)
- **React Router** (Navigation)
- **Styled Components**
- **Context**


## Installation & Setup 🏗️

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/dodo-burger.git
   cd dodo-burger
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Set up **Authentication** and **Firestore Database**.
   - Add your Firebase configuration to an `.env` file:
     ```env
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```
4. Start the development server:
   ```bash
   npm start
   ```



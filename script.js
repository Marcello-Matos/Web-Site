const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
  },
};

// src/firebase-config.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClIZMog5pHLj5mtOSyvWp0R_ikPkumHEs",
  authDomain: "web-site-magestic-x-coded.firebaseapp.com",
  projectId: "web-site-magestic-x-coded",
  storageBucket: "web-site-magestic-x-coded.appspot.com",
  messagingSenderId: "482744177613",
  appId: "1:482744177613:web:352d4fc95c0f3c0eb2aa84",
  measurementId: "G-F9KJL8BL3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };

console.log("Inicializando Firebase");
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("Firebase inicializado", app, analytics);

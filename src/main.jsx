import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Profile from "./Components/Profile.jsx";
import AppStore from "./Store/appStore.js";
import {Provider} from 'react-redux'
import AuthWrapper from "./Components/AuthWrapper.jsx";

let AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/community",
    element:<AuthWrapper> <App></App> </AuthWrapper>,
    children: [
      {
        path: "/community",
        element: <Home></Home>,
      },
      {
        path: "/community/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={AppStore}>
  <RouterProvider router={AppRouter}>
    <App />
  </RouterProvider>
  </Provider>
);

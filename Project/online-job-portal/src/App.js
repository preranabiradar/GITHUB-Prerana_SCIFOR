import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Layout from "./component/layout/Layout";
import SignIn from "./component/SignIn/SignIn"; // SignIn component for login
import SignUp from "./component/SignUp/SignUp";
import Jobs from "./component/jobs/Jobs"; // Jobs component for listing jobs
import JobDetails from "./component/jobDetails/JobDetails"; // JobDetails component
import AboutUs from "./component/aboutUs/AboutUs"; // About Us component
import ContactUs from "./component/contactUs/ContactUs"; // Contact Us component
import WelcomePage from "./component/mainPage/mainPage"; // Welcome Page component
import { LOGGED_USER } from "./utils/constant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "about",
    element: <AboutUs />, // Route for About Us page
  },
  {
    path: "contact",
    element: <ContactUs />, // Route for Contact Us page
  },
  {
    path: "signin",
    element: <SignIn />,
    errorElement: <div>Oops! Something went wrong!</div>,
    loader: async () => {
      try {
        const storedUser = localStorage.getItem(LOGGED_USER);
        if (storedUser) {
          return redirect("/jobs"); // Redirect if user is already logged in
        } else {
          return null;
        }
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Layout />,
    loader: async () => {
      try {
        const storedUser = localStorage.getItem(LOGGED_USER);
        if (storedUser) {
          return null; // Proceed if the user is authenticated
        } else {
          return redirect("/signin");
        }
      } catch (error) {
        return redirect("/signin");
      }
    },
    children: [
      {
        path: "jobs",
        element: <Jobs />, // Route for jobs listing
      },
      {
        path: "job-details/:id",
        element: <JobDetails />, // Route for job details (dynamic route with ID)
      },
    ],
  },
]);

// Main App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;

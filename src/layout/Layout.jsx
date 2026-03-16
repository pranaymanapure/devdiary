import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import ProfilePage from "../pages/ProfilePage";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import CreateBlog from "../pages/CreateBlog";
import MyBlogs from "../pages/MyBlogs";
import Auth from "../pages/Auth";
import AuthLayout from "./AuthLayout";

import store from "../redux/store";
import "../index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "profile", element: <ProfilePage /> },
            { path: "about", element: <AboutMe /> },
            { path: "contact", element: <Contact /> },
            { path: "my-blogs", element: <MyBlogs /> },
            { path: "create-blog", element: <CreateBlog /> },
        ],
    },

    // Login
    {
        path: "/login",
        element: <AuthLayout />,
        children: [{ index: true, element: <Auth /> }],
    },

    // Register
    {
        path: "/register",
        element: <AuthLayout />,
        children: [{ index: true, element: <Auth /> }],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);

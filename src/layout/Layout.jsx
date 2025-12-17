import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "../App";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import store from "../redux/store";
import "../index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "profile",
                element: <ProfilePage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);

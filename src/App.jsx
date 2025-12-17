import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import MobileNav from "./components/home/MobileNav";
function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <MobileNav />
        </>
    );
}

export default App;

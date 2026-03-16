import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import MobileNav from "./components/home/MobileNav";

function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <Toaster position="top-center" />
            {/* Fixed Header */}
            <Header />

            {/* Main Content */}
            <main className="grow pt-16 pb-20 md:pb-16">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

            {/* Mobile Bottom Navigation */}
            <MobileNav />
        </div>
    );
}

export default App;

import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Home, FileText, PlusSquare, User } from "lucide-react";

const MobileNavBar = () => {
    const { userData: user } = useSelector((state) => state.auth);

    const navItems = [
        { label: "Home", path: "/", icon: Home },
        { label: "My Blogs", path: "/my-blogs", icon: FileText },
        { label: "Create", path: "/create-blog", icon: PlusSquare },
        { label: "Profile", path: "/profile", icon: User },
    ];

    // Show different nav items based on login status
    const displayItems = user
        ? navItems
        : [
              { label: "Home", path: "/", icon: Home },
              { label: "Login", path: "/login", icon: User },
          ];

    return (
        <div className="mobile-nav-container md:hidden fixed bottom-0 left-0 w-full h-16 bg-white border-t border-gray-200 z-50">
            <nav className="flex justify-around items-center h-full">
                {displayItems.map(({ label, path, icon }) => {
                    const IconComponent = icon;

                    return (
                        <NavLink
                            key={path}
                            to={path}
                            className="relative flex flex-col items-center justify-center w-full h-full"
                        >
                            {({ isActive }) => (
                                <>
                                    {/* Active Indicator */}
                                    <div
                                        className={`absolute top-0 left-0 right-0 h-0.5 ${
                                            isActive
                                                ? "bg-black"
                                                : "bg-transparent"
                                        }`}
                                    />

                                    {/* Icon */}
                                    <IconComponent
                                        size={22}
                                        className={
                                            isActive
                                                ? "text-black"
                                                : "text-gray-500"
                                        }
                                    />

                                    {/* Label */}
                                    <span
                                        className={`text-[10px] mt-1 ${
                                            isActive
                                                ? "text-black font-medium"
                                                : "text-gray-500"
                                        }`}
                                    >
                                        {label}
                                    </span>
                                </>
                            )}
                        </NavLink>
                    );
                })}
            </nav>
        </div>
    );
};

export default MobileNavBar;

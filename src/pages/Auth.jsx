import { useLocation } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";

const Auth = () => {
    const location = useLocation();

    const isLogin = location.pathname === "/login";

    return isLogin ? <LoginForm /> : <RegisterForm />;
};

export default Auth;

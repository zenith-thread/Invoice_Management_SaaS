import { lazy } from "react";

const LoginDecor = lazy(() => import("./LoginDecor"));
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="flex h-screen w-screen">
      <LoginDecor />
      <LoginForm />
    </div>
  );
};

export default Login;

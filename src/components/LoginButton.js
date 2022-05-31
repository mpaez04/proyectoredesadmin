import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="LoginButton">
        <button className="bg-red-500 hover:bg-slate-300 rounded py-2 px-4 text-black" onClick={() => loginWithRedirect()}>Login Administrador</button>
    </div>
  );
};

export default LoginButton;

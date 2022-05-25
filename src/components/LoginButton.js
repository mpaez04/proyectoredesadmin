import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";
import General from "./General";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const {general} = General();
  return (
    <div className="LoginButton">
      <button onClick={() => loginWithRedirect()}>login Administrador</button>
    </div>
  );
};

export default LoginButton;

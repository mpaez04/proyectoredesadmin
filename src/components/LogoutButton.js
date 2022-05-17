import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LogoutButton.css';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div className="LogoutButton">
      <div className="Boton">
        <button onClick={() => logout()}>logout</button>
      </div>
      
    </div>
  )
};

export default LogoutButton;

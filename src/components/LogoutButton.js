import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LogoutButton.css';

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div className="LogoutButton">
      <div className="Boton">
        <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => logout()}>logout</button>
      </div>
      
    </div>
  )
};

export default LogoutButton;

/*import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//import JSONPretty from "react-json-pretty";
//import "react-json-pretty/themes/monikai.css";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  // return <pre>{JSON.stringify(user, null, 2)}</pre>;
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        
      </div>
    )
  );
};

export default Profile;
*/
import Body from './components/Body';
import Banner from './components/Banner'
import Footer from './components/Footer';
import Header from './components/Header';
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div className="App">
      <Banner/>
      <Header/>
      <Body/>
      <Footer 
        pie={<p>Copyright &copy; Todos los derechos reservados </p>}
      />
    </div>
    )
  );
}
export default Profile;
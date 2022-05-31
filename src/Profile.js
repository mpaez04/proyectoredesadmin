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
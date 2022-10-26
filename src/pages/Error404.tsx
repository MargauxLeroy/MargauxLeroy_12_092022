import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";

function Error404() {
  return (
    <>
      <Header />
      <div className="app-content">
        <NavigationBar />
        <div className="error">
          <p>404</p>
          <span>Oups! La page que vous demandez n'existe pas.</span>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
      </div>
    </>
  );
}

export default Error404;

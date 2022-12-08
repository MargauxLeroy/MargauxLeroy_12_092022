import { useContext } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { NavigationBar } from "../components/NavigationBar/NavigationBar";
import { DataContext } from "../components/Providers/DataProvider";

function Redirection() {
  /// We retrieve the context from the DataProvider
  const dataContext = useContext(DataContext);
  const isApi = dataContext.isApi;
  console.log("dataContext: ", isApi);

  const className = isApi ? "red" : "grey";

  return (
    <>
      <Header />
      <div className="app-content">
        <NavigationBar />
        <div className="redirection">
          <Link to={`user/12`}>
            <button className={className}>Karl</button>
          </Link>
          <Link to={`user/18`}>
            <button className={className}>Cécilia</button>
          </Link>
          <button
            onClick={() => {
              dataContext.setIsApi(!isApi);
            }}
          >
            {isApi ? "API" : "MOCK"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Redirection;

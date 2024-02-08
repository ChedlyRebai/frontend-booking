import "./navbar.css";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <span className="logo">lamabooking</span>
          </Link>{" "}
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <form
          className="form-inline my-2 my-lg-0"
          style={{ color: "black", textDecoration: "none" }}
        >
          {user ? (
            user.username
          ) : (
            <div>
              <Link to={"register"}>
                <button className="navButton">Register</button>
              </Link>
              <Link to={"login"}>
                <button className="navButton">Login</button>
              </Link>
            </div>
          )}{" "}
        </form>
      </nav>
      {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">

<img src="https://lp-cms-production.imgix.net/2019-06/c32f29efd9f1e16d0732dc4ce06918fd-sidi-bou-said.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75" className="img-fluid" alt="Responsive image"></img>
</div>
 */}{" "}
      {/* <div className="navContainer">
       
        <div>Hotel</div>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
        
      </div> */}
    </div>
  );
};

export default Navbar;

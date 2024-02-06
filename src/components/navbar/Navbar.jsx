import "./navbar.css";
import { Link, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            <span className="logo">lamabooking</span>
          </Link>{" "}
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <form
          class="form-inline my-2 my-lg-0"
          style={{ color: "black", textDecoration: "none" }}
        >
          {user ? (
            user.username
          ) : (
            <div>
              <button className="navButton">
                <Link to={"register"} /> Register
              </button>
              <button className="navButton">
                <Link to={"login"} /> Login
              </button>
            </div>
          )}{" "}
        </form>
      </nav>
      {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">

<img src="https://lp-cms-production.imgix.net/2019-06/c32f29efd9f1e16d0732dc4ce06918fd-sidi-bou-said.jpg?auto=format&w=1920&h=640&fit=crop&crop=faces,edges&q=75" class="img-fluid" alt="Responsive image"></img>
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

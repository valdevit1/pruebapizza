import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <Navbar className="navbar-title" data-bs-theme="dark">
        <Container>
          <Link className="navbar-title1" to="/">
            🍕 Pizzeria Mamma Mia!
          </Link>
          <div className="pizza-link">
            <NavLink className={({ isActive }) => (isActive ? "pizza-nav" : undefined)} to="/">
              Home
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "pizza-nav" : undefined)} to="/carrito">
              Mi Carrito 🛒
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;

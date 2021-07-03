import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";

function Sidebar() {
  return (
    <div class="Sidebar">
      <h1>Sidebar</h1>
      <div class="side-menu">
        <ul>
          <li>
            <Link to="/">
              <HomeIcon fontSize="large" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/Menu">Menu</Link>
          </li>
          <li>
            <Link to="/About"> About Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

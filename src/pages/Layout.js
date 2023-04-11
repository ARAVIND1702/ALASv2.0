import { Outlet, Link } from "react-router-dom";
import Ho from "./button";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/map">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li></li>
        </ul>
      </nav>

      <Outlet />
      
    </>
  )
};

export default Layout;
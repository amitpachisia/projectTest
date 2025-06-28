import { Outlet, Link } from "react-router-dom";
import './Layoutdesign.css'

const Layout = () => {
  return (
    <div class="block1">
        <div class="block2">

            <Link className="Link" to="/">Home</Link>

            <Link to="/blogs">Blogs</Link>

            <Link to="/Contact">Contact</Link>
            </div>
    </div>
  )
};

export default Layout;
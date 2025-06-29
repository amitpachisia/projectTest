import { Outlet, Link } from "react-router-dom";
import './Layoutdesign.css'

const Layout = () => {
  return (
    <div className="header">
      <div className="logo"><h1>LOGO</h1></div>
      <div class="block1">
        <ul>
            <li> <Link className="Link" to="/">Home</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>
    </div>
    </div>
  
  )
};

export default Layout;
import {  Link } from "react-router-dom";

export default function Layout ()  {
  return (
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/user">ListUsers</Link>
          </li>
        </ul>
      </nav>

  )
};



import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav_wrapper">

            <div className="logo">
              <a href="#">Logo</a>
            </div>
            <div className="menu">
              <ul>
                <li>
                  <NavLink to="">Home</NavLink>
                </li>
                <li>
                  <NavLink to="about">About</NavLink>
                </li>
                <li> <NavLink to="service">Service</NavLink></li>
                <li> <NavLink to="blog">Blog</NavLink></li>
                <li> <NavLink to="contact">Contact</NavLink></li>
              </ul>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

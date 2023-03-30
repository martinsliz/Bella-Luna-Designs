import { Link } from 'react-router-dom'
// import Search from './Search'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-left">
          {/* <Search /> */}
          {/* <form className="example" action="action_page.php">
            <input type="text" placeholder="Search..." name="search" />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form> */}
        </div>
        <div className="nav-center">
          <div>
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-register">
            <Link to="/register">REGISTER</Link>
          </div>
          <div className="nav-sign">
            <Link to="/signIn">SIGN IN</Link>
          </div>
          <div className="nav-about"></div>
          {/* <MenuItem>
            <ShoppingCartRounded />
          </MenuItem> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar

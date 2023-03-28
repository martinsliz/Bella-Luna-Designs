import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-left">
          <div className="nav-search">
            <form className="example" action="action_page.php">
              <input type="text" placeholder="Search..." name="search" />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-register">
            <Link to="/register">REGISTER</Link>
          </div>
          <div className="nav-sign">
            <Link to="/signIn">SIGN IN</Link>
          </div>
          {/* <MenuItem>
            <ShoppingCartRounded />
          </MenuItem> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar

import { Search, ShoppingCartRounded } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
`

const Logo = styled.h1`
  font-weight: bold;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-left">
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 16 }} />
          </SearchContainer>
        </div>

        <div className="nav-center">
          <Logo>LAMA.</Logo>
        </div>
        <div className="nav-right">
          <div className="nav-register">
            <Link>REGISTER</Link>
          </div>
          <div className="nav-sign">
            <Link>SIGN IN</Link>
          </div>
          <MenuItem>
            <ShoppingCartRounded />
          </MenuItem>
        </div>
      </div>
    </div>
  )
}

export default Navbar

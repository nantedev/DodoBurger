import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
        <div className="left-side">left</div>
        <div className="right-side">
            <h1>Bonjour { username }</h1>
            <Link to="/">
                <button>Deconnexion</button>
            </Link>
        </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.nav`
    background-color: blue;
    height: 10vh;
    display: flex;
    justify-content: space-between;

    .left-side {
        background-color: pink;
    }
    .right-side {
        background-color: purple;
    }
`
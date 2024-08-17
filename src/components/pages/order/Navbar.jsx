import styled from "styled-components"
import NavbarRightSide from "./NavbarRightSide"

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
        <div className="left-side">left</div>
        <NavbarRightSide username={ username } />
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
`
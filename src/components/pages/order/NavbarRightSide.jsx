import { Link } from "react-router-dom"
import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
        {/* <div className="admin-button">Admin Button</div> */}
        <Profile />
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    background-color: purple;
    display: flex;
    align-items: center;
    padding-right: 50px;

    /* .admin-button {
        background-color: lightblue;
    } */

    .profile {
        background-color: yellow;
    }
`
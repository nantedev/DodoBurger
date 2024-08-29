import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
        <ToggleButton 
        labelIfChecked="Désactiver le mode Admin"
        labelIfUnchecked="Activer le mode Admin"
        className={"toggle-button"}
        />
        <Profile username={ username } className={"profile"}/>
    </NavbarRightSideStyled>
  )
}

const NavbarRightSideStyled = styled.div`
    display: flex;
    align-items: center;
    padding-right: 50px;F06

    .toggle-button {
      border: 1px solid red;
    }
`
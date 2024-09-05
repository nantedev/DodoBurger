import styled from "styled-components";
import { theme } from "../../../../theme";
import Menu from "./Menu";
import Admin from "./Admin/Admin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";

export default function Main() {

  const {isModeAdmin, setIsModeAdmin} = useContext(OrderContext)


  return (
    <MainStyled>
      {/* <div className="basket">Basket</div> */}
      <div className="menu-and-admin">
        <Menu />
       {isModeAdmin && <Admin /> } 
      </div>
    </MainStyled>
  )
}

const MainStyled  = styled.main`
    border: 3px solid green; 
    background: ${theme.colors.background_white};
    height: calc(95vh - 10vh);
    flex: 1;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.strong};

    display: grid;
    grid-template-columns: 1fr;

    /* .basket {
      background: pink;
    } */

    .menu-and-admin {
      position: relative;
      overflow-y: hidden;
      display: grid;
      border-bottom-left-radius: ${theme.borderRadius.extraRound};
      border-bottom-right-radius: ${theme.borderRadius.extraRound};
    }

`
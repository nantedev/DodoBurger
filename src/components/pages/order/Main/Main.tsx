import styled from "styled-components"
import { theme } from "@/theme/theme"
import MainRightSide from "./MainRightSide/MainRightSide"
import Basket from "./Basket/Basket"

export default function Main() {
  return (
    <MainStyled>
      <Basket />
      <MainRightSide />
    </MainStyled>
  )
}

const MainStyled  = styled.main`
    background: ${theme.colors.background_white};
    height: calc(95vh - 10vh);
    flex: 1;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    box-shadow: ${theme.shadows.strong};

    display: grid;
    grid-template-columns: 25% 1fr;
    overflow: hidden;
`
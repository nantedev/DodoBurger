import styled from "styled-components";
import { theme } from "@/theme/theme";
import {useOrderContext} from "@/context/OrderContext";
import { getTabsConfig, getTabSelected } from "./tabsConfig";
import { EMPTY_PRODUCT } from "@/constants/product";

export default function AdminPanel() {
  
  const { currentTabSelected, productSelected } = useOrderContext()
  
  const hasAlreadyBeenClicked = productSelected !== EMPTY_PRODUCT

  const tabs = getTabsConfig(hasAlreadyBeenClicked)
  const tabSelected = getTabSelected(tabs, currentTabSelected) 

  return (
    <AdminPanelStyled> {tabSelected && tabSelected.Content} </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
    height: 250px;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    background: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    padding: 30px 5%;
`;
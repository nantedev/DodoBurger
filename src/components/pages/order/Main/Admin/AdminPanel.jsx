import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { tabsConfig, getTabSelected } from "./tabsConfig";

export default function AdminPanel() {
  
  const { currentTabSelected } = useContext(OrderContext)
  
  const tabs = tabsConfig
  const tabSelected = getTabSelected(tabs, currentTabSelected) 

  return (
    <AdminPanelStyled> {tabSelected && tabSelected.content} </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
    height: 250px;
    border-bottom-left-radius: ${theme.borderRadius.extra};
    border-bottom-right-radius: ${theme.borderRadius.extra};
    background: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    padding: 30px 5%;
`;
import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig, getTabSelected } from "./getTabsConfig";

export default function AdminPanel() {
  
  const { currentTabSelected } = useContext(OrderContext)
  
  const tabs = getTabsConfig(currentTabSelected)
  const tabSelected = getTabSelected(tabs, currentTabSelected) 

  return (
    <AdminPanelStyled>
      {currentTabSelected === tabSelected.index && tabSelected.label}
    </AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
    height: 250px;
    border-bottom-left-radius: ${theme.borderRadius.extra};
    border-bottom-right-radius: ${theme.borderRadius.extra};
    background: ${theme.colors.white};
    border-top: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    
`;
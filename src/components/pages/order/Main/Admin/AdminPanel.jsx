import styled from "styled-components";
import { theme } from "../../../../../theme";
import { useContext } from "react";
import OrderContext from "../../../../../context/OrderContext";

export default function AdminPanel() {
  const { isEditSelected, isAddSelected } = useContext(OrderContext)

  return (
    <AdminPanelStyled>
      {isAddSelected && "Ajouter un produit"}
      {isEditSelected && "Modifier le produit"}
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
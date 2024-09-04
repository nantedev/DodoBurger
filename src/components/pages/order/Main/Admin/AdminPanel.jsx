import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function AdminPanel() {
  return (
    <AdminPanelStyled></AdminPanelStyled>
  )
}


const AdminPanelStyled = styled.div`
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.greyLight};
    box-shadow: ${theme.shadows.subtle};
    height: 250px;
`;
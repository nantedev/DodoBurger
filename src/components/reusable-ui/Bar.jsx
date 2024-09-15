import styled from 'styled-components';
import { theme } from '../../theme';

export default function Bar({children}) {
  return (
    <BarStyled>{children}</BarStyled>
  );
}

const BarStyled = styled.div`
  background: ${theme.colors.background_dark};
  height: 70px;
  padding: 0 16px;
`;
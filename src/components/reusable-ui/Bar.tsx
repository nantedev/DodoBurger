import styled from 'styled-components';
import { theme } from '../../theme/theme';

type BarProps = {
  children: React.ReactNode
}

export default function Bar({children}: BarProps) {
  return (
    <BarStyled>{children}</BarStyled>
  );
}

const BarStyled = styled.div`
  background: ${theme.colors.background_dark};
  height: 70px;
  padding: 0 16px;
`;
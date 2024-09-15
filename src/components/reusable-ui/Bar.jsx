import styled from 'styled-components';

export default function Bar({children}) {
  return (
    <BarStyled>{children}</BarStyled>
  );
}

const BarStyled = styled.div`
  border: 1px solid red;
  background: ${theme.colors.background_dark};
  height: 70px;
`;
import styled from 'styled-components';
import {theme} from '../../../../../theme'
import Bar from '../../../../reusable-ui/Bar';

export default function Basket() {
  return (
    <BasketStyled>
        <Bar>Head</Bar>
        <div className="body">Body</div>
        <Bar>Footer</Bar>
    </BasketStyled>
  );
}

const BasketStyled = styled.div`
  background: pink;
  display: flex;
  flex-direction: column;

  .body{
    flex: 1;
    background: ${theme.colors.background_white};
    box-shadow: ${theme.shadows.basket};
  }
`;
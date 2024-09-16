import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Bar from '../../../../reusable-ui/Bar';

export default function Total({amountToPay}) {
  return (
    <Bar>
        <TotalStyled>
            <span className='total'>Total</span>
            <span className='amount'>{amountToPay}</span>
        </TotalStyled>
    </Bar>
  );
}

const TotalStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: "Amatic SC", cursive;
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;

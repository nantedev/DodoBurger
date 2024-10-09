import styled from 'styled-components';
import { theme } from '../../../../../theme';
import Bar from '../../../../reusable-ui/Bar';
import { useContext } from "react"
import OrderContext from "../../../../../context/OrderContext"
import { formatPrice } from "../../../../../utils/maths"
import { calculateSumToPay } from './helper';
import CasinoEffect from '../../../../reusable-ui/CasinoEffect';


export default function Total() {
  const { basket, menu } = useContext(OrderContext)
  const sumToPay = calculateSumToPay(basket, menu)

  return (
    <Bar>
        <TotalStyled>
            <span className='total'>Total</span>
            <CasinoEffect count={formatPrice(sumToPay)}/>
            {/* <span className="amount">{formatPrice(sumToPay)}</span> */}
        </TotalStyled>
    </Bar>
  )
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

import styled from 'styled-components';
import { theme } from '@/theme/theme';
import Bar from '@/components/reusable-ui/Bar';
import { useOrderContext } from '@/context/OrderContext';
import { formatPrice } from '@/utils/maths';
import { calculateSumToPay } from './helper';
import CasinoEffect from '@/components/reusable-ui/CasinoEffect';



export default function BasketHeader() {
  const { basket, menu } = useOrderContext()
  const sumToPay = calculateSumToPay(basket, menu) 

  return (
    <Bar>
        <BasketHeaderStyled>
            <span className='total'>Total</span>
            <CasinoEffect count={formatPrice(sumToPay)}/>
            {/* <span className="amount">{formatPrice(sumToPay)}</span> */}
        </BasketHeaderStyled>
    </Bar>
  )
}

const BasketHeaderStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.family.stylish};
  font-size: ${theme.fonts.size.P4};
  font-weight: ${theme.fonts.weights.bold};
  letter-spacing: 2px;
`;

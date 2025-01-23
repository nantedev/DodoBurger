import styled from 'styled-components';
import Bar from '@/components/reusable-ui/Bar';
import { theme } from '@/theme/theme';

export default function BasketFooter() {
  return (
    <Bar>
        <BasketFooterStyled>
            <span>Codé avec ❤️ et React.JS</span>
        </BasketFooterStyled>
    </Bar>
  );
}

const BasketFooterStyled = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: ${theme.fonts.size.P2};
        font-family: ${theme.fonts.family.stylish};
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.white};
        }
`;

import styled from 'styled-components';
import Bar from '../../../../reusable-ui/Bar';
import { theme } from '../../../../../theme';

export default function Footer() {
  return (
    <Bar>
        <FooterStyled>
            <span>Codé avec ❤️ et React.JS</span>
        </FooterStyled>
    </Bar>
  );
}

const FooterStyled = styled.div`
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

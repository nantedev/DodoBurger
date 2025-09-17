import styled from "styled-components";
import { theme } from "@/theme/theme";

type LogoProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export default function Logo({ className, onClick }: LogoProps) {
  return (
    <LogoStyled className={className} onClick={onClick}>
      <h1>Le Dodo</h1>
      <img src="/images/logo-dodo-burger.png" alt="logo-dodo-burger" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: ${theme.fonts.family.stylish};
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 45px;
    width: 60px;
    margin: 0 auto;
    transform: translateY(-4px);
  }
`;

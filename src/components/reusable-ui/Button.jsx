import styled, { css } from "styled-components"
import { theme } from "../../theme"

export default function Button({label, Icon, className, version="normal", onClick}) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick}>
    <span>{label}</span>
    <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  ${({version}) => extraStyle[version]};
`

const extraStylePrimary = css`
    width: 100%;
    background-color: #FB9E1C;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    text-decoration: none;
    line-height: 1;

    padding: 18px 24px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 800;
    color: white;
    border: 1px solid #FB9E1C;

    &:hover:not(:disabled) {
      background-color: white;
      color: #FB9E1C;
      border: 1px solid #FB9E1C;
      transition: all 200ms ease-out;
    }

    &:disableld {
      opacity: 0.6;
      cursor: not-allowed;
    }
  
    .icon {
     display: flex;
     justify-content: center;
     align-items: center;
    } 
`

const extraStyleSuccess = css`
  cursor: pointer;
  color: ${theme.colors.white};
  background: ${theme.colors.success};
  border: 1px solid ${theme.colors.success};
  border-radius: ${theme.borderRadius.round};
  height: 100%;
  padding: 0 1.5em;
  font-weight: ${theme.fonts.weights.semiBold};

  &:hover:not(:disabled){
    background: ${theme.colors.white};
    color: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }

  :active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`

const extraStyle = {
  normal: extraStylePrimary,
  success: extraStyleSuccess,
}
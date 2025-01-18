import styled, { css } from "styled-components"
import { theme } from "../../theme/theme"
import { ComponentProps, JSX } from "react"

type ButtonVersion = "normal" | "success"

type ButtonProps = {
  label: string,
  Icon?: JSX.Element,
  version?: ButtonVersion,
} & ComponentProps<"button">

export default function Button({label, Icon, className, version="normal", onClick, disabled }: ButtonProps) {
  return (
    <ButtonStyled className={className} version={version} onClick={onClick} disabled={disabled}>
    <span>{label}</span>
    <div className="icon">{Icon && Icon}</div>
    </ButtonStyled>
  )
}

type ButtonStyledProps = {
  version: ButtonVersion
}

const ButtonStyled = styled.button<ButtonStyledProps>`
  ${({version}) => extraStyle[version]};
`

const extraStyleNormal = css`
    width: 100%;
    background-color: ${theme.colors.primary};
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
    border: 1px solid ${theme.colors.primary};
    cursor: pointer;

    &:hover:not(:disabled) {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};
      transition: all 200ms ease-out;
    }

    &:disableld {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
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

  &:active {
    color: ${theme.colors.white};
    background: ${theme.colors.success};
    border: 1px solid ${theme.colors.success};
  }
`

const extraStyle = {
  normal: extraStyleNormal,
  success: extraStyleSuccess,
}
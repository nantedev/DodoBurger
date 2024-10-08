import styled, { css } from "styled-components"
import { theme } from "../../theme"
import React from "react"

const TextInput = React.forwardRef(
  ({ value, onChange, className, Icon, version = "normal", ...extraProps}, ref) => {
  return (
    <TextInputStyled className={className} version={version}>
    <div className="icon">
      {Icon && Icon}
    </div>
    <input 
    ref={ref}
    value={value} 
    onChange={onChange} 
    type="text" 
    {...extraProps}
    />
  </TextInputStyled>
  )
  }
)

export default TextInput

const TextInputStyled = styled.div`
  border-radius: ${theme.borderRadius.round};
  display: flex;
  align-items: center;

  .icon {
    font-size: ${theme.fonts.size.SM};
    margin: 0 13px 0 8px;
    display: flex; // to center icon vertically
  }

  input {
    border: none;
    font-size: ${theme.fonts.size.SM};
    width: 100%;

    &::placeholder {
      color: ${theme.colors.greyMedium};
    }
  }

  ${({ version }) => extraStyle[version]}

`

const extraStyleNormal = css`
  background-color: ${theme.colors.white};
  padding: 18px 28px;
  color: ${theme.colors.greySemiDark};

  input {
    color: ${theme.colors.dark};

    &::placeholder {
      background: ${theme.colors.white};
    }
  }
`

const extraStyleMinimalist = css`
  background-color: ${theme.colors.background_white};
  padding: 8px 16px;
  color: ${theme.colors.greyBlue};

  input {
    background: ${theme.colors.background_white}; ////+
    color: ${theme.colors.dark};

    &:focus {
      outline: 0; //// add outline
    }
  }
`

const extraStyle = {
  normal: extraStyleNormal,
  minimalist: extraStyleMinimalist,
}
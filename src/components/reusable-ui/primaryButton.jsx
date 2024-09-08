import styled from "styled-components"
import { theme } from "../../theme"

export default function PrimaryButton({label, Icon}) {
  return (
    <PrimaryButtonStyled>
    <span>{label}</span>
    <div className="icon">{Icon && Icon}</div>
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
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
     margin-left: 10px;
    }
`
import React from 'react'
import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoStyled>
      <h1>Dodo</h1> 
      <img src="/images/logo-burger.png" alt="logo-dodo-burger" />
      <h1>Burger</h1>
      </LogoStyled>
  )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    zoom: 2.5; // transform: scale(2.5);

    h1 {
      display: inline;
      text-align: center;
      color: #ffa01b;
      font-size: 36px;
      Line-height: 1em;
      font-weight: 700;
      text-transform: uppercase;
      Letter-spacing: 1.5px;
      font-family: "Amatic SC", cursive;
    }

    img {
      object-fit: contain;
      object-position: center;
      height: 60px;
      width: 80px;
      margin: 0 5px 0;
    }
`;

import styled from "styled-components";
import LoginForm from "./LoginForm"
import Logo from "../../reusable-ui/Logo";


export default function LoginPage() {

      // affichage (render)
    return (
    <LoginPageStyled>
        <Logo className={"logo-login-page"}/>
        <LoginForm />
    </LoginPageStyled>
    )
}

const LoginPageStyled  = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

    ::before {
    content: "";
    background: url("/images/burger-background.jpg") rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-blend-mode: darken;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; 
    }

    .logo-login-page {
      zoom: 2.5; // or transform: scale(2.5);
    }
`
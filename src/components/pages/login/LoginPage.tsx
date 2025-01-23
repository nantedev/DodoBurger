import styled from "styled-components";
import LoginForm from "./LoginForm"
import Logo from "@/components/reusable-ui/Logo"; 


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
  background-image: radial-gradient(circle, #8a5e97, #7d5d95, #705d92, #645c8e, #595a89, #505984, #47577e, #405578, #395270, #344f68, #314c60, #2f4858);

    .logo-login-page {
      zoom: 3; // or transform: scale(2.5);
      
    }
`
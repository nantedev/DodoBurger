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
  background-image: linear-gradient(to right bottom, #c03d3b, #c94540, #d24e45, #db564b, #e45e50, #e45e50, #e45e50, #e45e50, #db564b, #d24e45, #c94540, #c03d3b);

    .logo-login-page {
      zoom: 3; // or transform: scale(2.5);
      
    }
`
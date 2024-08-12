import styled from "styled-components";
import LoginForm from "./LoginForm"
import Logo from "../../reusable-ui/logo";


export default function LoginPage() {

      // affichage (render)
    return (
    <LoginPageStyled>
        <Logo />
        <LoginForm />
    </LoginPageStyled>
    )
}

const LoginPageStyled  = styled.div`
  background: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
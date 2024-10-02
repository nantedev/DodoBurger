import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BsPersonCircle } from "react-icons/bs"
import { IoChevronForwardSharp } from "react-icons/io5"
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button"
import { theme } from "../../../theme"
import { authenticateUser} from "../../../api/user"

export default function LoginForm() {
    // state
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    // comportements
    const handleSubmit = async (event) => {
      event.preventDefault() 
      authenticateUser(username)
      setUsername("")
      navigate(`order/${username}`)
     }

    const handleChange = (event) => {
      setUsername(event.target.value)
     }

     // Affichage
    return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div>
          <h1>Bienvenue chez nous !</h1>
          <hr />
          <h2>Connectez-vous</h2>
        </div>
        <div>
          <TextInput 
              value={username} 
              onChange={handleChange} 
              placeholder={"Entrez votre prénom"}
              required
              Icon={<BsPersonCircle />}
              className="input-login"
              version="normal"
              />

            <Button 
              label={"Accédez à mon espace"} 
              Icon={<IoChevronForwardSharp />}
              />
        </div>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid ${theme.colors.loginLine};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    margin: 20px 10px 10px;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
  }
  .input-login {
    margin: 18px 0;
  }
`;

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BsPersonCircle } from "react-icons/bs"
import { IoChevronForwardSharp } from "react-icons/io5"
import TextInput from "@/components/reusable-ui/TextInput";
import Button from "@/components/reusable-ui/Button" 
import { theme } from "@/theme/theme" 
import { authenticateUser } from "@/api/user" 
import Welcome from "./Welcome"

export default function LoginForm() {
    // state
    const [username, setUsername] = useState<string>("")
    const navigate = useNavigate()

    // comportements
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault() 
      const userReceived = await authenticateUser(username)
      setUsername("")
      navigate(`order/${userReceived.username}`)
     }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value)
     }

     // Affichage
    return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div>
          <Welcome />
          <TextInput 
              value={username} 
              onChange={(handleChange)} 
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
  padding: 2 ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: ${theme.fonts.family.authentique};
  font-weight: ${theme.fonts.weights.black};
  text-shadow: ${theme.fonts.shadow.simple};

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
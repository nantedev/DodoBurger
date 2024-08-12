import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../../theme"

export default function LoginForm() {
    // state
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    // comportements
    const handleSubmit = (event) => {
      event.preventDefault() 
      setInputValue("")
      navigate(`order/${inputValue}`)
     }

    const handleChange = (event) => {
      setInputValue(event.target.value)
     }

     // Affichage
    return (
    <LoginFormStyled>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>
        <form action="submit" onSubmit={handleSubmit}>
          <input 
            value={inputValue} 
            onChange={handleChange} 
            type="text" 
            placeholder="Entrez votre prénom" 
            required
            />
          <button>Accédez à mon espace</button>
        </form>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.div`
     border: 1px solid blue;
     background: green;
`;

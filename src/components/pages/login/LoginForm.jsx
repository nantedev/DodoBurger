import { useState } from "react"
import { BsPersonCircle } from "react-icons/bs"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { IoChevronForwardSharp } from "react-icons/io5";

// import { theme } from "../../../theme"

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
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
        <div>
          <h1>Bienvenue chez nous !</h1>
          <hr />
          <h2>Connectez-vous</h2>
        </div>
        <div className="input-with-icon">
          <BsPersonCircle className="icon"/>
            <input
              value={inputValue}
              onChange={handleChange}
              type="text"
              placeholder="Entrez votre prénom"
              required
              />
        </div>
          <button className="button-whith-icon">
            <span>Accédez à mon espace</span>
            <IoChevronForwardSharp />
          </button>
    </LoginFormStyled>
  )
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }

  h1 {
    color: white;
    font-size: 48px;
  }

  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }

  .input-with-icon {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
    font-size: 15px;
    margin-right: 8px;
    color: #93a2b1;
    }

    input {
    border: none;
    font-size: 15px;
    color: #17161a;
    width: 100%;
    }

    &::placeholder {
    background: white;
    color: lightgrey;
    }
  }

  .button-whith-icon {
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
      font-size: 15px;
      margin-left: 10px;
    }
  }
`;

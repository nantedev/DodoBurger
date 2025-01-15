import styled from "styled-components"
import { theme } from "../../../theme"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import { initialiseUserSession } from "./helpers/initialiseUserSession"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useOrderContext } from "../../../context/OrderContext"

export default function OrderPage() {
  // state
  const { username } = useParams()
  const { setMenu, setBasket } = useOrderContext()

  useEffect(() => {
    initialiseUserSession(username, setMenu, setBasket)
  }, [])

  //affichage (render)
  return (
    <OrderPageStyled>
      <div className="container">
        <Navbar />
        <Main />
      </div>
    </OrderPageStyled>
  )
}

const OrderPageStyled  = styled.div`
  background-image: linear-gradient(to right bottom, #2f4858, #344f68, #405577, #525985, #685c8f, #6e5c91, #735d93, #795d94, #6c5c91, #605b8c, #555a87, #4b5881);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import { theme } from "../../../theme"
import OrderContext from "../../../context/OrderContext.jsx"
import { useState } from "react"

export default function OrderPage () {
    // state
    const [isModeAdmin, setIsModeAdmin] = useState(true)
    const [isCollapsed, setIsCollapsed]= useState(false)
    const [isEditSelected, setIsEditSelected]= useState(false)
    const [isAddSelected, setIsAddSelected]= useState(true)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    // comportements

    const orderContextValue = {
      isModeAdmin,
      setIsModeAdmin,
      isCollapsed,
      setIsCollapsed,
      isEditSelected,
      setIsEditSelected,
      isAddSelected,
      setIsAddSelected,
      currentTabSelected,
      setCurrentTabSelected,
        }
    // affichage
    return (
        <OrderContext.Provider value={orderContextValue}>
          <OrderPageStyled>
              <div className="container">
                  <Navbar />
                  <Main />
              </div>
          </OrderPageStyled>
        </OrderContext.Provider>
    )
}

const OrderPageStyled  = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import { theme } from "../../../theme"
import OrderContext from "../../../context/OrderContext.jsx"
import { useState } from "react"
import { fakeMenu } from "../../../fakeData/fakeMenu.jsx"

export default function OrderPage () {
   
    //State
    const [isModeAdmin, setIsModeAdmin] = useState(true)
    const [isCollapsed, setIsCollapsed]= useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [menu, setMenu] = useState(fakeMenu.MEDIUM)
    
    //Comportements

    const handleAddProduct = (newProduct) => {
      //Copie du tableau
      const menuCopy = [...menu]
      //Manip copie du tableau
      const menuUpdated = [newProduct, ...menuCopy]
      //Update State
      setMenu(menuUpdated)
    }

    const handleDelete = (idOfProductToDelete) => {
      //Copie du state
      const menuCopy = [...menu]
      //Manip copie de state
      const menuUpdated = menuCopy.filter((product) =>  product.id !== idOfProductToDelete)
      //Update State
      setMenu(menuUpdated)
    }

    const orderContextValue = {
      isModeAdmin,
      setIsModeAdmin,
      isCollapsed,
      setIsCollapsed,
      currentTabSelected,
      setCurrentTabSelected,
      menu,
      handleDelete,
      handleAddProduct,
        }

    //Affichage
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
import styled from "styled-components"
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import { theme } from "../../../theme"
import OrderContext from "../../../context/OrderContext.jsx"
import { useRef, useState } from "react"
import { EMPTY_PRODUCT } from "../../../enums/product"
import { useMenu } from "../../../hooks/useMenu.jsx"
import { useBasket } from "../../../hooks/useBasket.jsx"

export default function OrderPage () {
   
    //State
    const [isModeAdmin, setIsModeAdmin] = useState(true)
    const [isCollapsed, setIsCollapsed]= useState(true)
    const [currentTabSelected, setCurrentTabSelected] = useState("edit")
    const [ newProduct, setNewProduct ] = useState(EMPTY_PRODUCT)
    const [ productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
    const titleEditRef = useRef()
    const {menu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()
    const { basket, handleAddToBasket, handleDeleteBasketProduct } = useBasket()


    const orderContextValue = {
      isModeAdmin,
      setIsModeAdmin,
      isCollapsed,
      setIsCollapsed,
      currentTabSelected,
      setCurrentTabSelected,
      menu,
      handleDelete,
      handleAdd,
      resetMenu,
      newProduct,
      setNewProduct,
      productSelected,
      setProductSelected,
      handleEdit,
      titleEditRef,
      basket,
      handleAddToBasket,
      handleDeleteBasketProduct,
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
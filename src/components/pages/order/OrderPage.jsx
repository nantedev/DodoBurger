import styled from "styled-components"
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import { theme } from "../../../theme"
import OrderContext from "../../../context/OrderContext"
import { useEffect, useRef, useState } from "react"
import { EMPTY_PRODUCT } from "../../../enums/product"
import { useMenu } from "../../../hooks/useMenu"
import { useBasket } from "../../../hooks/useBasket"
import { findObjectById } from "../../../utils/array"
import { useParams } from "react-router-dom"
import { initialiseUserSession } from "./helpers/initialiseUserSession"

export default function OrderPage () {
   
    //State
    const [isModeAdmin, setIsModeAdmin] = useState(false)
    const [isCollapsed, setIsCollapsed]= useState(false)
    const [currentTabSelected, setCurrentTabSelected] = useState("add")
    const [ newProduct, setNewProduct ] = useState(EMPTY_PRODUCT)
    const [ productSelected, setProductSelected] = useState(EMPTY_PRODUCT)
    const titleEditRef = useRef()
    const {menu, setMenu, handleAdd, handleDelete, handleEdit, resetMenu} = useMenu()
    const { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct } = useBasket()
    const { username } = useParams()


const handleProductSelected = async (idProductClicked) => { 
   await setCurrentTabSelected("edit")
   await setIsCollapsed(false)
   const productClickedOn = findObjectById(idProductClicked, menu)   
   await setProductSelected(productClickedOn)
   titleEditRef.current.focus()
 }


 useEffect(() => {
  initialiseUserSession(username, setMenu, setBasket)
  }, [])


// quand le composant est render (ou appelé =/= de render affichage) il s'execute, il fait une première lecture en ignorant le useEffect, il va identier ensuite le useEffect lors de la seconde lecture
    const orderContextValue = {
      username,
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
      handleProductSelected
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
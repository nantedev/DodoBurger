import styled from "styled-components"
import Navbar from "./Navbar/Navbar"
import Main from "./Main/Main"
import { theme } from "../../../theme"
import OrderContext from "../../../context/OrderContext.jsx"
import { useRef, useState } from "react"
import { fakeMenu } from "../../../fakeData/fakeMenu.jsx"
import { EMPTY_PRODUCT } from "../../../enums/product"
import { deepClone } from "../../../utils/array"

export default function OrderPage () {
   
    //State
    const [isModeAdmin, setIsModeAdmin] = useState(true)
    const [isCollapsed, setIsCollapsed]= useState(true)
    const [currentTabSelected, setCurrentTabSelected] = useState("edit")
    const [menu, setMenu] = useState(fakeMenu.MEDIUM)
    const [ newProduct, setNewProduct ] = useState(EMPTY_PRODUCT)
    const [ productSelected, setProductSelected] = useState(fakeMenu.SMALL[1])
    const titleEditRef = useRef()

    //Comportements (state handlers)

    const handleAddProduct = (newProduct) => {
      //Copie du tableau
      const menuCopy = deepClone(menu)
      //Manip copie du tableau
      const menuUpdated = [newProduct, ...menuCopy]
      //Update State
      setMenu(menuUpdated)
    }

    const handleDelete = (idOfProductToDelete) => {
      //Copie du state
      const menuCopy = deepClone(menu)
      //Manip copie de state
      const menuUpdated = menuCopy.filter((product) =>  product.id !== idOfProductToDelete)
      //Update State
      setMenu(menuUpdated)
    }

    const handleEdit = (productBeingEdited) => { 
      //Copie du state
      const menuCopy = deepClone(menu)
      //Manip copie de state
      const indexOfProductToEdit = menu.findIndex((product) => product.id === productBeingEdited.id)
      console.log("indexOfProductToEdit: ", indexOfProductToEdit)
      menuCopy[indexOfProductToEdit] = productBeingEdited
      //Update State
      setMenu(menuCopy)     
    }

    const resetMenu = () => {
      setMenu(fakeMenu.SMALL)
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
      resetMenu,
      newProduct,
      setNewProduct,
      productSelected,
      setProductSelected,
      handleEdit,
      titleEditRef,
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
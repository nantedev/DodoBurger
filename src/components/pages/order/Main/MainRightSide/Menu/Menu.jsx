import styled from "styled-components";
import { formatPrice } from "../../../../../../utils/maths"
import { theme } from "../../../../../../theme/index";
import Card from "../../../../../reusable-ui/Card"
import { useContext } from "react";
import OrderContext from "../../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT } from "../../../../../../enums/product";
import { findObjectById, isEmpty } from "../../../../../../utils/array"
const IMAGE_BY_DEFAUT = "/images/coming-soon.png"
import Loader from "./Loader"

export default function Menu() {
  
const {
  username, 
  menu, 
  isModeAdmin, 
  handleDelete, 
  resetMenu, 
  productSelected, 
  setProductSelected, 
  handleAddToBasket,
  handleDeleteBasketProduct,
  handleProductSelected,
  } = useContext(OrderContext)

  //State

  //Comportements (event handlers)

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation()
    const productToAdd = findObjectById(idProductToAdd, menu)
    handleAddToBasket(productToAdd)
}

const handleCardDelete = (event, idProductToDelete) => {
  event.stopPropagation()
  handleDelete(idProductToDelete, username)
  handleDeleteBasketProduct(idProductToDelete)
  idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
 }

  //Affichage
 if (menu === undefined) return <Loader />

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={() => resetMenu(username)}/>
  }

 

  return (
    <StyledMenu>
      {menu.map(({ id, title, imageSource, price }) => {
        return (
          <Card
            key={id}
            title={title}
            imageSource={imageSource ? imageSource : IMAGE_BY_DEFAUT}
            leftDescription={formatPrice(price)}
            hasDeleteButton={isModeAdmin}
            onClick={isModeAdmin ?() => handleProductSelected(id) : null}
            onDelete={(event) => handleCardDelete(event, id)} 
            onAdd={(event) => handleAddButton(event, id)}
            isHoverable={isModeAdmin}
            isSelected={checkIfProductIsClicked(id, productSelected)}
          />
        )
      })}
    </StyledMenu>
  )
}


const StyledMenu  = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: ${theme.shadows.strong};
    overflow-y: scroll ;
`
import styled from "styled-components";
import { formatPrice } from "../../../../../../utils/maths"
import { theme } from "../../../../../../theme/index";
import Card from "../../../../../reusable-ui/Card"
import {useOrderContext} from "../../../../../../context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT, NO_STOCK_IMAGE } from "../../../../../../enums/product";
import { findObjectById, isEmpty } from "../../../../../../utils/array"
const IMAGE_BY_DEFAUT = "/images/coming-soon.png"
import Loader from "./Loader"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "../../../../../../theme/animations";
import { convertStringToBoolean } from "../../../../../../utils/string"
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated";

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
  } = useOrderContext()

  //State

  //Comportements (event handlers)

  const handleAddButton = (event, idProductToAdd) => {
    event.stopPropagation()
    const productToAdd = findObjectById(idProductToAdd, menu)
    handleAddToBasket(productToAdd, username)
}

const handleCardDelete = (event, idProductToDelete) => {
  event.stopPropagation()
  handleDelete(idProductToDelete, username)
  handleDeleteBasketProduct(idProductToDelete, username)
  idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
 }

  let cardContainerClassName = isModeAdmin ? "card-container is-hoverable" : "card-container"

  //Affichage
 if (menu === undefined) return <Loader />

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />
    return <EmptyMenuAdmin onReset={() => resetMenu(username)}/>
  }

 

  return (
    <TransitionGroup component={StyledMenu} className="menu">
      {menu.map(({ id, title, imageSource, price, isAvailable, isPublicised }) => {
        return (
          <CSSTransition classNames={"animation-menu"} key={id} timeout={300}>
            <div className={cardContainerClassName}> 
              {convertStringToBoolean(isPublicised) && <RibbonAnimated />}
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
                overlapImageSource={NO_STOCK_IMAGE}
                isOverlapImageVisible={convertStringToBoolean(isAvailable) === false}
              />
            </div>
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}


const StyledMenu  = styled.div`
    background: ${theme.colors.background_white};
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: ${theme.shadows.strong};
    overflow-y: scroll ;
.card-container {
  position: relative;
    .ribbon{
      z-index: 2;
    }
}
  ${menuAnimation}

.card-container {
  position: relative;
  height: 330px; 
  border-radius: ${theme.borderRadius.extraRound};

  &.is-hoverable {
    &:hover {
      transform: scale(1.05);
      transition: ease-out 0.4s;
    }
  }
}

.ribbon {
  z-index: 2;
}
${ribbonAnimation}
`
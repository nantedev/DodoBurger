import styled from "styled-components";
import { formatPrice } from "@/utils/maths"
import { theme } from "@/theme/theme";
import Card from "@/components/reusable-ui/Card";
import {useOrderContext} from "@/context/OrderContext";
import EmptyMenuAdmin from "./EmptyMenuAdmin";
import EmptyMenuClient from "./EmptyMenuClient";
import { checkIfProductIsClicked } from "./helper";
import { EMPTY_PRODUCT, NO_STOCK_IMAGE } from "@/constants/product";
const IMAGE_BY_DEFAUT = "/images/coming-soon.png"
import Loader from "./Loader"
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { menuAnimation } from "@/theme/animations";
import { convertStringToBoolean } from "@/utils/string"
import RibbonAnimated, { ribbonAnimation } from "./RibbonAnimated";
import { useParams } from "react-router-dom";
import { isEmpty } from "@/utils/array";

export default function Menu() {
  
const {
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
  
  const { username } = useParams()

  //Comportements (event handlers)

  const handleAddButton = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, idProductToAdd: string) => {
    event.stopPropagation()
    username && handleAddToBasket(idProductToAdd, username)
}

const handleCardDelete = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>, idProductToDelete: string) => {
  event.stopPropagation()
  if (!username) return 
  handleDelete(idProductToDelete, username)
  handleDeleteBasketProduct(idProductToDelete, username)
  idProductToDelete === productSelected.id && setProductSelected(EMPTY_PRODUCT)
 }

  let cardContainerClassName = isModeAdmin ? "card-container is-hoverable" : "card-container"

  //Affichage
 if (menu === undefined) return <Loader />

  if (isEmpty(menu)) {
    if (!isModeAdmin) return <EmptyMenuClient />
    if (username) return <EmptyMenuAdmin onReset={() => resetMenu(username)}/>
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
                onClick={() => handleProductSelected(id)}
                onDelete={(event) => handleCardDelete(event, id)}
                onAdd={(event) => handleAddButton(event, id)}
                isHoverable={isModeAdmin}
                isSelected={checkIfProductIsClicked(id, productSelected.id)}
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
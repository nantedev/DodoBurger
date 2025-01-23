import styled from 'styled-components';
import BasketCard from './BasketCard';
import { BASKET_MESSAGE, DEFAULT_IMAGE } from "../../../../../../constants/product"
import { findObjectById } from "../../../../../../utils/array"
import {useOrderContext} from '../../../../../../context/OrderContext'
import { checkIfProductIsClicked } from '../../MainRightSide/Menu/helper'
import { TransitionGroup, CSSTransition} from "react-transition-group"
import { basketAnimation } from '../../../../../../theme/animations';
import { formatPrice } from '../../../../../../utils/maths';
import { convertStringToBoolean } from '../../../../../../utils/string';
import Sticker from "../../../../../reusable-ui/Sticker"

export default function BasketProducts() {
  const { 
    username,
    basket, 
    isModeAdmin, 
    handleDeleteBasketProduct, 
    menu, 
    handleProductSelected, 
    productSelected,
  } = useOrderContext()

  const handleOnDelete = (id) => { 
    handleDeleteBasketProduct(id, username)
  }



  return (
    <TransitionGroup component={BasketProductsStyled} className={"transition-group"}>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu)
          return (
            <CSSTransition 
              appear={true} 
              classNames={"animation-basket"} 
              key={basketProduct.id} 
              timeout={300}>
              <div className='card-container'>
                {convertStringToBoolean(menuProduct.isPublicised) && <Sticker className="badge-new"/>}
              <BasketCard
              {...menuProduct}
              imageSource={menuProduct.imageSource ? menuProduct.imageSource : DEFAULT_IMAGE}
              quantity={basketProduct.quantity}
              onDelete={() => handleOnDelete(basketProduct.id)}
              isClickable={isModeAdmin}
              onClick={isModeAdmin ?() => handleProductSelected(basketProduct.id) : null}
              isSelected={checkIfProductIsClicked(basketProduct.id, productSelected)}
              className={"card"}
              price={convertStringToBoolean(menuProduct.isAvailable) ? formatPrice(menuProduct.price) : BASKET_MESSAGE.NOT_AVAILABLE}
              />
              </div>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
  );
}



const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;


 

    .card-container {
        /* border: 1px solid blue; */
        margin: 10px 16px;
        height: 86px;
        box-sizing: border-box;
        position: relative;
        &:first-child {
            margin-top: 20px;
          /* border: 1px solid red; */
        }
        &:last-child {
            margin-bottom: 20px;
        }

        .badge-new {
        position: absolute;
        z-index: 1;
        bottom: 10%;
        left: 21%;
        transform: translateY(-21%);
        transform: translateX(-5%);
      }
    }

    ${basketAnimation}
`
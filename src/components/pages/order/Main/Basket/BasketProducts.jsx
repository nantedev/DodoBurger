import styled from 'styled-components';
import BasketCard from './BasketCard';
import { DEFAULT_IMAGE } from "../../../../../enums/product"
import { useContext } from "react"
import { findObjectById } from "../../../../../utils/array"
import OrderContext from '../../../../../context/OrderContext'
import { checkIfProductIsClicked } from '../MainRightSide/Menu/helper'
import { TransitionGroup, CSSTransition} from "react-transition-group"

export default function BasketProducts() {
  const { 
    username,
    basket, 
    isModeAdmin, 
    handleDeleteBasketProduct, 
    menu, 
    handleProductSelected, 
    productSelected,
  } = useContext(OrderContext)

  const handleOnDelete = (id) => { 
    handleDeleteBasketProduct(id, username)
  }



  return (
      <TransitionGroup component={BasketProductsStyled} className={"transition-group"}>
        {basket.map((basketProduct) => {
          const menuProduct = findObjectById(basketProduct.id, menu)
          return (
            <CSSTransition appear={true} classNames={"animation"} key={basketProduct.id} timeout={{enter:500, exit:500}}>
              <div className='basket-card'>
              <BasketCard
              {...menuProduct}
              imageSource={menuProduct.imageSource ? menuProduct.imageSource : DEFAULT_IMAGE}
              quantity={basketProduct.quantity}
              onDelete={() => handleOnDelete(basketProduct.id)}
              isClickable={isModeAdmin}
              onClick={isModeAdmin ?() => handleProductSelected(basketProduct.id) : null}
              isSelected={checkIfProductIsClicked(basketProduct.id, productSelected)}
              className={"slide"}
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


    .animation-appear {
    .slide {
      transform: translateX(100px);
      opacity: 0%;
    }
  }

  .animation-appear-active {
    .slide {
      transition: 0.5s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-enter {
    .slide {
      transform: translateX(100px);
      opacity: 0%;
    }
  }
  .animation-enter-active {
    .slide {
      transition: 0.5s;
      transform: translateX(0px);
      opacity: 100%;
    }
  }


  .animation-exit {
    .slide {
      transform: translateX(0px);
      opacity: 100%;
    }
  }

  .animation-exit-active {
    .slide {
      transform: translateX(-100px);
      opacity: 0%;
      transition: 0.5s;
    }
  }
  .animation-exit-done {
    .slide {
    background: grey;
    transition: 2s;
    }
  }

    .basket-card {
        /* border: 1px solid blue; */
        margin: 10px 16px;
        height: 86px;
        box-sizing: border-box;
        &:first-child {
            margin-top: 20px;
          /* border: 1px solid red; */
        }
        &:last-child {
            margin-bottom: 20px;
        }
    }
`
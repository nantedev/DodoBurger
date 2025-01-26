import styled from 'styled-components';
import BasketCard from './BasketCard';
import { BASKET_MESSAGE, DEFAULT_IMAGE } from "@/constants/product"
import { findObjectById } from "@/utils/array"
import { useOrderContext } from '@/context/OrderContext';
import { checkIfProductIsClicked } from "@/components/pages/order/Main/MainRightSide/Menu/helper"
import { TransitionGroup, CSSTransition} from "react-transition-group"
import { basketAnimation } from '@/theme/animations';
import { formatPrice } from '@/utils/maths';
import { convertStringToBoolean } from '@/utils/string';
import Sticker from '@/components/reusable-ui/Sticker';
import { useParams } from 'react-router-dom';
import { MenuProduct } from '@/types/Product';

export default function BasketProducts() {
  const { 
    basket, 
    isModeAdmin, 
    handleDeleteBasketProduct, 
    menu, 
    handleProductSelected, 
    productSelected,
  } = useOrderContext()

  const { username } = useParams()

  const handleOnDelete = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, id: string) => {
    event.stopPropagation()
    if (username === undefined) return
    handleDeleteBasketProduct(id, username)
  }

  const handleCardClick = (isModeAdmin: boolean, basketProductId: string) => {
    isModeAdmin && handleProductSelected(basketProductId)
  }

  const getPrice = (menuProduct: MenuProduct) => {
  return convertStringToBoolean(menuProduct.isAvailable) 
  ? formatPrice(menuProduct.price) 
  : BASKET_MESSAGE.NOT_AVAILABLE
  }

  return (
    <TransitionGroup component={BasketProductsStyled} className={"transition-group"}>
        <>
        {basket.map((basketProduct) => {
          if (menu === undefined) return
          const menuProduct = findObjectById(basketProduct.id, menu)
          if (!menuProduct) return
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
              onDelete={(event) => handleOnDelete(event, basketProduct.id)}
              isClickable={isModeAdmin}
              onClick={() => handleCardClick(isModeAdmin, basketProduct.id)}
              isSelected={checkIfProductIsClicked(basketProduct.id, productSelected.id)}
              className={"card"}
              price={getPrice(menuProduct)}
              />
              </div>
            </CSSTransition>
          )
        })}
        </>
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
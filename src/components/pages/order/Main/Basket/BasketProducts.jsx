import styled from 'styled-components';
import BasketCard from './BasketCard';
import { DEFAULT_IMAGE } from "../../../../../enums/product"
import { useContext } from "react"
import { findObjectById } from "../../../../../utils/array"
import OrderContext from '../../../../../context/OrderContext'
import { checkIfProductIsClicked } from '../MainRightSide/Menu/helper';

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
    <BasketProductsStyled>
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu)
        return (
          <div className='basket-card' key={basketProduct.id}>
          <BasketCard 
          {...menuProduct} 
          imageSource={menuProduct.imageSource ? menuProduct.imageSource : DEFAULT_IMAGE} 
          quantity={basketProduct.quantity}
          onDelete={() => handleOnDelete(basketProduct.id)}
          isClickable={isModeAdmin}
          onClick={isModeAdmin ?() => handleProductSelected(basketProduct.id) : null}
          isSelected={checkIfProductIsClicked(basketProduct.id, productSelected)}
          />
        </div>
        )
      })}
    </BasketProductsStyled>
  );
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
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
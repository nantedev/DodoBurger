import styled from 'styled-components';
import BasketCard from './BasketCard';
import { DEFAULT_IMAGE } from "../../../../../enums/product"
import { useContext } from "react"
import { findObjectById } from "../../../../../utils/array"
import OrderContext from '../../../../../context/OrderContext'

export default function BasketProducts() {
  const { basket, isModeAdmin, handleDeleteBasketProduct, menu } = useContext(OrderContext)

  const handleOnDelete = (id) => { 
    handleDeleteBasketProduct(id)
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
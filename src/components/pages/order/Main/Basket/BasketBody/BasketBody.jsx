import React, { useContext } from 'react'
import { isEmpty } from '../../../../../../utils/array'
import OrderContext from '../../../../../../context/OrderContext'
import EmptyBasket from './EmptyBasket'
import BasketProducts from './BasketProducts'

export default function BasketBody() {
    const { basket, menu } = useContext(OrderContext)

  return (
    <>{isEmpty(basket) ?  <EmptyBasket isLoading={menu === undefined}/> : <BasketProducts />}</>
  )
}

import { useState } from 'react'
import { deepClone, findObjectById, findIndexById, removeObjectById } from '@/utils/array'
import { setLocalStorage } from '@/utils/window'
import { BasketProduct } from '@/types/Product'

export const useBasket = () => {
  const [basket, setBasket] = useState<BasketProduct[]>([])

  const handleAddToBasket = (idProductToAdd: string, username: string) => {
    const basketCopy = deepClone(basket)
    const productAlreadyInBasket = findObjectById(idProductToAdd, basketCopy)
        //Product is already in the basket
    if (productAlreadyInBasket) {
      incrementProductAlreadyInBasket(idProductToAdd, basketCopy, username)
      return
    }
        //Product is NOT already in the basket
    createNewBasketProduct(idProductToAdd, basketCopy, setBasket, username)
  }

  const incrementProductAlreadyInBasket = (
    idProductToAdd: string, 
    basketCopy: BasketProduct[], 
    username:string
    ) => {
    const indexOfBasketProductToIncrement = findIndexById(idProductToAdd, basketCopy)
    basketCopy[indexOfBasketProductToIncrement].quantity += 1
    setBasket(basketCopy)
    setLocalStorage(username, basketCopy)
    }

  const createNewBasketProduct = (
    idProductToAdd: string, 
    basketCopy: BasketProduct[], 
    setBasket: React.Dispatch<React.SetStateAction<BasketProduct[]>>, 
    username: string,
) => {
    // we do not re-create a whole product, we only add the extra info a basket product has in comparison to a menu product
    const newBasketProduct = { id: idProductToAdd, quantity: 1 }
    const newBasket = [newBasketProduct, ...basketCopy]
    setBasket(newBasket)
    setLocalStorage(username, newBasket)
  }

  const handleDeleteBasketProduct = (idBasketProduct: string, username: string) => {
    const basketUpdated = removeObjectById(idBasketProduct, basket)
    setBasket(basketUpdated)
    setLocalStorage(username, basketUpdated)
  }

  return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct }
}


// import { useState } from 'react'
// import { deepClone, findObjectById, findIndexById, removeObjectById } from '../utils/array'
// import { setLocalStorage } from '../utils/window'
// import { BasketProduct } from '@/types/Product'

// export const useBasket = () => { 
//     const [basket, setBasket] = useState<BasketProduct[]>([])
    
//     //Gestionnaire de state

//     const handleAddToBasket = (productToAdd: string, username:string) => {
//         const basketCopy = deepClone(basket)
//         const isProductAlreadyInBasket = findObjectById(productToAdd, basketCopy) !== undefined

//         // Product is NOT already in the basket

//         if(!isProductAlreadyInBasket) {
//             createNewProductInBasket(productToAdd, basketCopy, setBasket, username)
//             return
//         }

//         // Product is already in the basket

//         incrementProductAlreadyInBasket(productToAdd, basketCopy, username)

//     }

//     const createNewProductInBasket = (
//         productToAdd: string, 
//         basketCopy: BasketProduct[], 
//         setBasket: React.Dispatch<React.SetStateAction<[]>>, 
//         username: string
//     ) => {
//         const newBasketProduct = {
//             id: productToAdd,
//             quantity: 1,
//         }
//         const basketUpdated = [newBasketProduct, ...basketCopy]
//         setBasket(basketUpdated)
//         setLocalStorage(username, basketUpdated)
//     }

//     const incrementProductAlreadyInBasket = (
//         productToAdd: string, 
//         basketCopy: BasketProduct[], 
//         username: string
//     ) => {
//         const indexOfBasketProductToIncrement = findIndexById(productToAdd.id, basketCopy)
//         basketCopy[indexOfBasketProductToIncrement].quantity += 1
//         setBasket(basketCopy)
//         setLocalStorage(username, basketCopy)
//     }

//     const handleDeleteBasketProduct = (
//         idBasketProduct: string, 
//         username: string      
//     ) => {
//         const basketUpdated = removeObjectById(idBasketProduct, basket)
//         setBasket(basketUpdated)
//         setLocalStorage(username, basketUpdated)
//     }

// return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct}
// }

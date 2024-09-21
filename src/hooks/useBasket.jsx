import { useState } from 'react'
import {fakeBasket} from '../fakeData/fakeBasket'
import { deepClone, findInArray, findIndex, filter } from '../utils/array'

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket.EMPTY)
    const handleAddToBasket = (productToAdd) => {
        
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = findInArray(productToAdd.id, basketCopy) !== undefined

        // Product is NOT already in the basket

        if(!isProductAlreadyInBasket) {
            createNewProductInBasket(productToAdd, basketCopy, setBasket)
            return
        }

        // Product is already in the basket

        incrementProductAlreadyInBasket(productToAdd, basketCopy)

    }

    const createNewProductInBasket = (productToAdd, basketCopy, setBasket) => {
        const newBasketProduct = {
            ...productToAdd,
            quantity: 1,
        }
        const basketUpdated = [newBasketProduct, ...basketCopy]
        setBasket(basketUpdated)
    }

    const incrementProductAlreadyInBasket = (productToAdd, basketCopy) => {
        const indexOfBasketProductToIncrement = findIndex(productToAdd.id, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
    }

    const handleDeleteBasketProduct = (idBasketProduct) => {
        
        const basketCopy = deepClone(basket)
        const basketUpdated = filter(idBasketProduct, basketCopy)
        setBasket(basketUpdated)
    }

return { basket, handleAddToBasket, handleDeleteBasketProduct}
}

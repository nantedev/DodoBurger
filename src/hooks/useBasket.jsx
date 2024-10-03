import { useState } from 'react'
import {fakeBasket} from '../fakeData/fakeBasket'
import { deepClone, findObjectById, findIndexById, removeObjectById } from '../utils/array'
import { setLocalStorage } from '../utils/window'

export const useBasket = () => { 
    const [basket, setBasket] = useState([])
    
    const handleAddToBasket = (productToAdd, username) => {
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = findObjectById(productToAdd.id, basketCopy) !== undefined

        // Product is NOT already in the basket

        if(!isProductAlreadyInBasket) {
            createNewProductInBasket(productToAdd, basketCopy, setBasket, username)
            return
        }

        // Product is already in the basket

        incrementProductAlreadyInBasket(productToAdd, basketCopy, username)

    }

    const createNewProductInBasket = (productToAdd, basketCopy, setBasket, username) => {
        const newBasketProduct = {
            ...productToAdd,
            quantity: 1,
        }
        const basketUpdated = [newBasketProduct, ...basketCopy]
        setBasket(basketUpdated)
        setLocalStorage(username, basketUpdated)
    }

    const incrementProductAlreadyInBasket = (productToAdd, basketCopy, username) => {
        const indexOfBasketProductToIncrement = findIndexById(productToAdd.id, basketCopy)
        basketCopy[indexOfBasketProductToIncrement].quantity += 1
        setBasket(basketCopy)
        setLocalStorage(username, basketCopy)
    }

    const handleDeleteBasketProduct = (idBasketProduct) => {
        const basketUpdated = removeObjectById(idBasketProduct, basket)
        setBasket(basketUpdated)
    }

return { basket, setBasket, handleAddToBasket, handleDeleteBasketProduct}
}

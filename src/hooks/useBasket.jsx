import { useState } from 'react'
import {fakeBasket} from '../fakeData/fakeBasket'
import { deepClone, findInArray } from '../utils/array'

export const useBasket = () => { 
    //State
    const [basket, setBasket] = useState(fakeBasket.SMALL)
    //State Handlers
    const handleAddToBasket = (productToAdd) => {
        //Copie du state
        const basketCopy = deepClone(basket)
        const isProductAlreadyInBasket = findInArray(productToAdd.id, basketCopy) !== undefined
        //Manip du state
        if(!isProductAlreadyInBasket) {
            const newBasketProduct = {
                ...productToAdd,
                quantity: 1,
            }
        //Update du state
        const basketUpdated = [newBasketProduct, ...basketCopy]
        setBasket(basketUpdated)
    }
    }
return { basket, handleAddToBasket }
}

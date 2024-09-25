import { findObjectById } from "../../../../../utils/array.jsx"

export const calculateSumToPay = (basket, menu) => {
    return basket.reduce((total, basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu)
        total += menuProduct.price * basketProduct.quantity
        console.log('total: ', total)
        return total
    }, 0)
}
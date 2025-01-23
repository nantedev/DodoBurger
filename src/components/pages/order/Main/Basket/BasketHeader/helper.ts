import { BasketProductQuantity, MenuProduct } from "@/types/Product"
import { findObjectById } from "../../../../../../utils/array"
import { convertStringToBoolean } from "../../../../../../utils/string"
import { DEFAUT_SUM_TO_PAY } from '@/constants/product';

export const calculateSumToPay = (basket: BasketProductQuantity[], menu: MenuProduct[] | undefined) => {
    if (menu === undefined) return DEFAUT_SUM_TO_PAY

    return basket.reduce((total, basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu)

        // Produit non trouvé pour cet id (TS)
        if(menuProduct === undefined)  return total

        // On ne veut pas afficher de NaN
        if(isNaN(menuProduct.price)) return total

        // si le produit est en rupture de stock, alors on le retire du calcul du total à payer
        if(convertStringToBoolean(menuProduct.isAvailable) === false) return total
        
        
        const sousTotal = menuProduct.price * basketProduct.quantity

        total += sousTotal

        return total

    }, DEFAUT_SUM_TO_PAY)
}
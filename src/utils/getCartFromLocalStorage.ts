import { TCartItem } from "../redux/cart/types"
import { calcTotalCount, calcTotalPrice } from "./calcTotalCountAndPrice"

export const getCartFromLocalStorage = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) as TCartItem[]: []
    const totalCount = calcTotalCount(items)
    const totalPrice = calcTotalPrice(items)

    return {
        items,
        totalCount,
        totalPrice,
    } 
}
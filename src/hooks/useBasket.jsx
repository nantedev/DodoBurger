import { useState } from 'react'
import {fakeBasket} from '../fakeData/fakeBasket.jsx'

export const useBasket = () => { 
    const [basket, setBasket] = useState(fakeBasket)
    return { basket }
}

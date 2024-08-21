import {BUY_CAKE} from './cakeType.js'
export const buyCake = (num = 1) => {
    return {
        type: BUY_CAKE,
        payload: num
    }
}
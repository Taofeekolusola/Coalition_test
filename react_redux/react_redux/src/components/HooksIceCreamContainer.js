import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {buyIceCream} from '../redux/index'

export default function HooksIceCreamContainer() {
    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream)
    const dispatch = useDispatch()
    return <div>
        <h1>Num of iceCream = {numOfIceCream}</h1>
        <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
}
import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../redux/index'

export default function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return <div>
        <h1>Num of Cakes = {numOfCakes}</h1>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
}
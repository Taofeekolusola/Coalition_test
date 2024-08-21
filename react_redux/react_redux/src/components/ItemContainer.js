import React from 'react'
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
  return (
<div><h1>Item - {props.item}</h1>
<button onClick={props.buyItem}>Buy Item</button>
</div>
)
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? 
    state.cake.numOfCakes : 
    state.iceCream.numOfIceCream;

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buyItem: () => ownProps.cake? 
        dispatch(buyCake()) : 
        dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps, 
    mapDispatchToProps)
    (ItemContainer)
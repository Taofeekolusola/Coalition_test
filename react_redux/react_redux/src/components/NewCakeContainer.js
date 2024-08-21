import React, {useState} from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [num, setnum] = useState(1)
    return <div>
        <h1> Number of Cakes = {props.numOfCakes}</h1>
        <button onClick={() => props.buyCake(num)}>Buy {num} Cake</button>
        <input type="text" value={num} onChange={(e) => setnum(e.target.value)}></input>
    </div>
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes}
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: num => dispatch(buyCake(num))
    }
}

export default connect(mapStateToProps, 
mapDispatchToProps)
(NewCakeContainer)
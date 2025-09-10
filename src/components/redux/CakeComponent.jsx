import { byCake } from '../../redux/cake/cakeAction'
// import { connect} from 'react-redux'
import {useDispatch, useSelector } from 'react-redux' // 2nd method by a hook

const CakeComponent = (props) => {

    const numbersOfCakes = useSelector((state) => state.numberOfCakes) // by a hoook
    const dispatch = useDispatch() // by a hook

  return (
    <>
    {/* <div>Number of Cake : {props.numOfCakes}</div> */}
    {/* <button onClick={props.byCake}>By cake</button> */}
     
     {/* by hook */}
    <div>Number of Cake : {numbersOfCakes}</div> 
    <button onClick={() => dispatch(byCake())}>By cake</button>
    </>
  )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        byCake : () => dispatch(byCake())
    }
}

// export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent)

export default CakeComponent  //by hook
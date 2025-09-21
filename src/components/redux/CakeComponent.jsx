import { byCake } from '../../redux/cake/cakeAction'
import { connect} from 'react-redux'
const CakeComponent = (props) => {

  return (
    <>
    <div>Number of Cake : {props.numOfCakes}</div>
    <button onClick={props.byCake}>By cake</button>
    </>
  )
}

const mapStateToProps = state => {
    return {
        // numOfCakes : state.cake.numberOfCakes // without rootReducer
        numOfCakes : state.cake.numberOfCakes // with rootReducer
    }
}

const mapDispatchToProps = dispatch => {
    return{
        byCake : () => dispatch(byCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComponent)
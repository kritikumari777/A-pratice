import {useDispatch, useSelector } from 'react-redux'  // secound Method
import { byIce } from '../redux/ice/iceAction'

const IceComponent = () => {

// const numOfIce = useSelector((state) => state.numOfIce)  // without rootReducer
const numOfIce = useSelector((state) => state.ice.numOfIce) // with rootReducer
const dispatch = useDispatch()


  return (
    <>
    <div>Number of Ice Cream : {numOfIce}</div>
    <button onClick={() => dispatch(byIce())}>Buy Ice</button>
    </>
  )
}


export default IceComponent
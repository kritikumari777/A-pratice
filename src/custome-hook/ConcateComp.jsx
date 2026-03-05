import {useConcate} from './useConcate'

const ConcateComp = () => {
    const concate = useConcate("my text")
   
  return (
    <div>{concate}</div>
  )
}

export default ConcateComp
import withBg from './withBg'

const HigherOrderComp = () => {
  return (
    <div className=''>HigherOrderComp</div>
  )
}

export default withBg(HigherOrderComp)
const withBg = (WrapperComponent) => {
  return (props) => (
    <div style={{background: "red"}}>
      <WrapperComponent {...props}/>
    </div>
  )
}

export default withBg


const withBGHOC = (WrappedComp) => {
   return (props) => {
    return (
        <div style={{background: "red"}}>
            <WrappedComp {...props}/>
        </div>
    )
   }
}

export default withBGHOC
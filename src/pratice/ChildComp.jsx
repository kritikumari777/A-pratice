
const ChildComp = ({children}) => {
    return (
        <div>
            <div>{true ? "Yes" : "NO"}</div>
            <button type="button" >Click</button>
            {children}
        </div>
    )
}

export default ChildComp
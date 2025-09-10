import { useState } from "react"

const ChangeColor = () =>{
    const [isActive, setIsActive] = useState(false)

    return(
        <>
        <button style={{background:isActive? "red" : "pink"}} onClick={()=>setIsActive(!isActive)}>change color</button>
        </>
    )
}

export default ChangeColor
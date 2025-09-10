import { useState } from "react"

const Crude = () =>{
    const [name, setName] = useState('')
    const [desplayName, SetDisplayName] = useState([])

    const handleSubmit = () =>{
        SetDisplayName([...desplayName ,name])
        SetDisplayName((prev) => ({...prev, desplayName: name}))
        setName('')
    
    }
    const handleDelet = (item) =>{
         const res = desplayName?.filter((v, index) =>{
           return v !== item
         })
         SetDisplayName(res)
    }
    return (
        <div>
            <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleSubmit} >Submit</button>
            <div>
            {desplayName.map((item, i) =>{
               return <>
               <div key={i}>{item}</div> 
               <button onClick={() => handleDelet(item)} >delet</button>
               </>
            })}
            </div>
        </div>
    )
}

export default Crude
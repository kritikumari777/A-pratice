import { useEffect, useState } from "react"

const CountinousIncrement = () => {
    const [counter, setCounter] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const handlleIncrement = () => {
        setIsActive(prev => !prev)
    }

    useEffect(() => {
        if(!isActive) return 

        let res = setInterval(() => {
            setCounter(pre =>{
                if(pre < 10) return pre+1
                clearInterval(res)
                setIsActive(false)
                return pre
            })
        }, 1000)

        return () => clearInterval(res)

    }, [isActive])

    return (
        <div>
            <div>{counter}</div>
            <button onClick={handlleIncrement}>{!isActive? "Increase" : "Stop"}</button>
        </div>
    )
}

export default CountinousIncrement
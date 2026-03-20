import React, { useEffect, useState } from 'react'
import { useThrottle } from './useThrottle'

export const ThrottlingCom = () => {

    const [top, setTop] = useState(0)

    useEffect(() => {
        const findHight = () => {
            setTop(window.innerHeight)
        }
        window.addEventListener("resize", findHight)

        return () => window.removeEventListener("resize", findHight)
    }, [])

    const throttleValue = useThrottle(top, 1000)

    return (
        <>
        <div>value : {top}</div>
        <div>Throttl Value : {throttleValue}</div>
        </>
    )
}

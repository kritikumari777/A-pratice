import { useEffect, useRef, useState } from "react"

export const useThrottle = (value, delay) => {

    const [calledValue, SetCallValue] = useState(value)
    const refValue = useRef(true)

    useEffect(() => {
        if (refValue.current) {
            SetCallValue(value)
            refValue.current = false

            setTimeout(() => {
                refValue.current = true
            }, delay)
        }

    }, [value, delay])

    return calledValue

}
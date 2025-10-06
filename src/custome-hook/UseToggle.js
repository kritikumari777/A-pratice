import { useState } from "react"

const useToggle = (initialValue) => {
    const [value, setValue] = useState(initialValue)

    const toggle = () => setValue(prev => !prev)

    return [value, toggle]
}

export default useToggle
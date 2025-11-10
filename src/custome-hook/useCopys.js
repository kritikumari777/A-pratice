import { useState } from 'react'

const useCopys = (text) => {

  const [copy, setCopy] = useState(false)

  const copyFun = async () => {
    try {
      let res = await navigator.clipboard.writeText(text)
      setCopy(true)

      setTimeout(() => {
        setCopy(false)
      }, 500)

      return res

    } catch {
      throw new Error("error");

    }

  }

  return [copy, copyFun]
}

export default useCopys
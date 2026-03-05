import { useMemo } from "react"

export const useConcate = (text) => {

  const res = useMemo(() => {
    const ans = String(text) + " - " + new Date().toLocaleString()
    return ans
  }, [text])

  return res

}

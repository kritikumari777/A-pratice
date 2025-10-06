import React, { useEffect, useState } from 'react'

const GoogleSearch = () => {

    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState([])

    useEffect(() => {
        const getRes = setTimeout(() => {
            if(!inputValue.trim()){
                setResult([])
                return
            }

         fetch(`https://api.github.com/search/users?q=${inputValue}`)
         .then((res) => res.json())
         .then((data) => {
            console.log(data)
            setResult(data.items)
        })
         .catch((err) => console(err))
        }, 500)

        return () => window.clearTimeout(getRes)
    }, [inputValue])
  return (
    <div>
    <input placeholder='search' value={inputValue} type='text' onChange={(e) => setInputValue(e.target.value)}/>
    {result?.map((item, index) => {
        return (
            <div key={item?.value}>{item?.login}</div>
        )
    })}
    </div>
  )
}

export default GoogleSearch
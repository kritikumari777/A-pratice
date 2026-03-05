import React, { useEffect, useState } from 'react'

const DebounceSearch = () => {
    const [input, setInput] = useState("")
    const [result, setResult] = useState([])

    useEffect(() => {

        const data = setTimeout(() => {
             fetch(`https://api.github.com/search/users?q=${input}`)
             .then(res => res.json())
             .then(value => setResult(value?.items))
             .catch(err => console.error(err))
        }, 500);
        console.log(result)
        return () => window.clearTimeout(data)

    }, [input])

  return (
    <div>
        <input type='text' placeholder='Searched ....' value={input} name={input} onChange={(e) => setInput(e.target.value)}/>
        {result?.map((items, i) => (
            <div key={i}>{items?.login}</div>
        ))}
    </div>
  )
}

export default DebounceSearch
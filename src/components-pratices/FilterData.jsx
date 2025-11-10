import { useEffect, useState } from 'react'

const FilterData = () => {
    const [input, setInput] = useState("")
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")

            if (!response.ok) {
                throw new Error(response.status);
            }

            const res = await response.json()
            setData(res)
            setFilter(res)
        }
        fetchData()
    }, [])

    useEffect(() => {
            const res =  data.filter((item, i) => {
               return item?.name.toLowerCase().includes(input.toLowerCase())
            })
        console.log(res)
        setFilter(res)

    }, [input, data])


    return (
        <div>
            <input value={input} placeholder='Search...' onChange={(e) => setInput(e.target.value)} />
            <div>{filter.map((item, i) => {
                return (
                    <div key={i}>{item?.name}</div>
                )
            })}</div>
        </div>
    )
}

export default FilterData
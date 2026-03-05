import { useState } from "react"
import FormInput from "./FormInput"
const FormFildesComp = ({ item}) => {

    const initialState = item?.fields?.reduce((ac, cv) => {
        ac[cv?.name] = ""
        return ac
    }, {})

    const [input, setInput] = useState(initialState)
    const [info, setInfo] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        
        e.preventDefault()
        setInfo((prev) => [...prev, input])
        setInput(initialState)
        console.log("Submited Sucessfully")
    }

    console.log(info)


    return (
        <div>
            <h3>{item?.header}</h3>
            <form onSubmit={handleSubmit}>
                {item?.fields?.map((field, j) => {
                    return (
                        <FormInput
                            key={field.id}
                            onChange={handleChange}
                            value={input[field?.name] || ""}
                            {...field}

                        />
                    )

                })}
                <div>
                    <button type="submit">{item?.btn}</button>
                </div>
            </form>
        </div>
    )
}

export default FormFildesComp
import axios from 'axios'
import React, { useState } from 'react'
import FormDetailsComp from './FormDetailsComp'
import configData from "./data/data.json"
import { validationFun } from './data/Validation'

const initialValue = configData.reduce((ac, field) => {
    ac[field.name] = field?.type === "checkbox" ? [] : ""
    return ac
}, {})

const FormComp = () => {
    const [formData, setFormData] = useState(initialValue)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValidate = validationFun(formData, configData)
      
        if (Object.keys(isValidate).length <= 0) {
            setError(isValidate)
            console.log(error)
            setLoading(false)
        } else {
            // try {
            // setLoading(true)
            //     axios.get("/uaser/api", {
            //         method: "POST",
            //         header: {"content-type" : "appilcation/json"},
            //          body: {"username" : "kriti"}
            //     })
            //     console.log("Appliction Submited Sucessfull")
            // } catch { err => setError(err) }
            // finally {
            //     setLoading(false)
            // }
            console.log("Sucessfull")
            window.alert("Sucessfull")
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        console.log(formData)
    }

    const handleCheck = (e) => {
        const { name, value, checked } = e.target
        checked ? formData.gender.push(value) : formData.gender.pop(value)
    }

    if (loading) return <p>Loading ......</p>
    if (error) return <p>Error ...</p>

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {configData.map((items, i) => {
                        return (
                            <FormDetailsComp
                                key={i}
                                label={items.label}
                                name={items.name}
                                type={items.type}
                                value={formData[items.name]}
                                placeholder={items.placeholder}
                                pattern={items.pattern}
                                required={items.required}
                                options={items.options}
                                onChange={handleChange}
                                onCkeck={handleCheck}
                                error={error }
                            />
                        )
                    })}
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default FormComp
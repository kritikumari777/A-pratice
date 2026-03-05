import React from 'react'

const RadioGroupComp = (props) => {
    const { name = "", type = "", label = "", value = "", onChange = () => { }, options = [], error = "" } = props

    return (
        <div>
            <p>{label}</p>
            {options.map((item, i) => {
                // console.log("value", value, "item" , item)
                return (

                    <label key={i}>
                        {item}
                        <input type={type} id={name} name={name} value={item} onChange={onChange} />
                    </label>
                )
            })}
            {error?.[name] && <p style={{ color: "red" }}>{error?.[name]}</p>}
        </div>
    )
}

export default RadioGroupComp
import React, { useState } from 'react'

const SelectComp = (props) => {
    const { name="", label="", value="", options=[], onChange=() => {}, required=false, error="" } = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select id={name} name={name} onChange={onChange} value={value}>
                {options.map((item, i) => (
                    <option key={i}>{item}</option>
                ))}
            </select>
            {error?.[name] && <p style={{ color: "red" }}>{error?.[name]}</p>}
        </div>
    )
}

export default SelectComp
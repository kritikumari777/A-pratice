import React from 'react'

const UserFormInput = ({label, placeholder, type, handleInput, value}) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input required={true} type={type} placeholder={placeholder} value={value} name={label} onChange={handleInput} />
        </div>
    )
}

export default UserFormInput
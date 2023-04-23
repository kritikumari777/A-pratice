import React from 'react'

function ArrayLisst() {

    const details = [{ name: 'Kriti', email: "123hgjdhf" },
    { name: 'priti', email: "hehdgf" }]

    return (
        details.map((detail, index) => <li key={index}> {detail.name} {detail.email}</li>)
    )
}

export default ArrayLisst

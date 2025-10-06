import React from 'react'

function ArrayList() {

    const details = [{id: 1, name: 'Kriti', email: "123hgjdhf" },
    {Id: 2, name: 'priti', email: "hehdgf" }]

    return (
          <div style={{background: "pink", width: "40%" , display: 'flex', justifyContent: 'center', flexDirection: "column", margin:"auto"} }>
    <ol>
    {details.map((item, i) => {
        return ( 
        <li style={{padding: "5px 0px"}} key={item?.id}>{item?.name}</li>)
    })}
     </ol>
    </div>
    )
}

export default ArrayList

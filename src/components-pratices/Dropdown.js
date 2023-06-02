import React from 'react'
import { useState} from "react";

const Countries = [
    { fast_name: "priti", last_name: "kumari", city: ["ratu", "Ranchi"] },
    { fast_name: "kriti", last_name: "prasad", city: ["nodia", "Delhi"] }
  ];

function Dropdown() {

    const [Country, setCountry] = useState({
        fast_name: "",
        last_name: "",
        city: []
      });

  return (
    <div>
        <select value={Country} onChange={(e) => setCountry(e.target.value)}>
        {Countries?.map((i, index) => (
          <option value={index}>{i.fast_name}</option>
        ))}
      </select>
      <select value={Country}>
        {Countries[Country]?.city?.map((item, index) => (
          <option value={index}>{item}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown

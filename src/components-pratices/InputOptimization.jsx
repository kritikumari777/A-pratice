import { useState } from 'react'

const InputOptimization = () => {

    const [user, setUser] = useState({

        name: "",
        email: "",
        phone: "",
        address: "",
        company: "",
        profile: "",
        salary: "",
        joiningdata: "",
        roll: "",
        teammanager: "",
        teamleder: ""
    })

    const handleChange = (e) => {
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(user)
    return (
        <div>
            <form>
                <input type="text" name="name" onChange={handleChange} placeholder='Name'></input>
                <input type="text" name="email" onChange={handleChange} placeholder='email'></input>
                <input type="text" name="phone" onChange={handleChange} placeholder='phome'></input>
                <input type="text" name="address" onChange={handleChange} placeholder='address'></input>
                <input type="text" name="company" onChange={handleChange} placeholder='company'></input>
                <input type="text" name="profile" onChange={handleChange} placeholder='profile'></input>
                <input type="text" name="salary" onChange={handleChange} placeholder='salary'></input>
                <input type="text" name="joiningdate" onChange={handleChange} placeholder='joining date'></input>
                <input type="text" name="roll" onChange={handleChange} placeholder='roll'></input>
                <input type="text" name="teammanager" onChange={handleChange} placeholder='team manager'></input>
                <input type="text" name="teamleder" onChange={handleChange} placeholder='team leder'></input>
                <button>Sumbit</button>
            </form>
        </div>
    )
}

export default InputOptimization

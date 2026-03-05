import { useState } from 'react'
import UserFormInput from './UserFormInput'
const UserForm = ({ fildes }) => {
  const initialState = [
    fildes?.reduce((ac, cv) => {
      ac[cv?.label] = ""
      return ac
    }, {})
  ]

  const [input, setInput] = useState(initialState)
  const [data, setData] = useState([])

  const handleInput = (e) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(input)
    isValid(input?.label)
    setData([...data, input])
    console.log("Submited Sucessfully")
    setInput({})
  }

  const isValid= (value) => {
    console.log("Yes")
    if(value?.length < 2 ){
      Error("Please enter valid name")
    }else
    if(!value?.includes("@.") ){
      Error("Please enter a valid email")
    }else
    if(value?.length <= 10 && value?.length >= 10){
      Error("Please enter valid Phone number")
    }else
      if(!value?.includes("@[A-Z][a-z]d+]")){
      Error("Please enter valid password")
      }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fildes?.map((item, i) => {
          return (
            <UserFormInput key={item?.id} handleInput={handleInput} value={input[item?.label] ?? ""} {...item} />
          )
        })}
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UserForm

const FormInput = ({ placeholder, onChange, value, name, type}) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input type={type} placeholder={placeholder} onChange={onChange} value={value} name={name} />
    </div>
  )
}

export default FormInput
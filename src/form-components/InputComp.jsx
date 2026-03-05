
const InputComp = (props) => {
    const { name = "", label = "", type = "", value = "", placeholder = "", onChange = () => { }, error = "", required = false } = props

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input id={name} name={name} type={type} value={value} placeholder={placeholder} onChange={onChange}/>
            {error?.[name] && <p style={{ color: "red" }}>{error?.[name]}</p>}
        </div>
    )
}

export default InputComp
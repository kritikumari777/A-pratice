
const CheckBoxComp = (props) => {
    
    const { name="", label="", type="", value="", options=[], onCkeck=() => {}, required=false, error=""} = props 

    return (
        <div>
            <p>{label}</p>
            {options?.map((item, i) => {
                return(
                <label key={i}>
                    <input name={name} type={type} value={item} onChange={onCkeck}/>
                    {item || ""}
                </label>
                )
                 }          )}
            {error?.[name] && <p style={{ color: "red" }}>{error?.[name]}</p>}
        </div>
    )
}

export default CheckBoxComp
import { data } from "../data/formData.js"
import FormFildesComp from "./FormFildesComp.jsx"
const FormComp = () => {

    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", justifyContent: "center", alignItems: "center" }}>
            {data?.map((item, i) => {
                return (
                    <FormFildesComp key={item.id} item={item} />
                )
            })}
        </div>
    )
}

export default FormComp
import InputComp from './InputComp'
import SelectComp from './SelectComp'
import RadioGroupComp from './RadioGroupComp'
import CheckBoxComp from './CheckBoxComp'

export const FormDetailsComp = (props) => {
  const { type, onChange, onCheck } = props

  // const fieldError = error?.[name]
  // console.log(fieldError)

  switch (type) {
    case "text":
    case "email":
    case "tel":
      return (
        <InputComp
          {...props}
          onChange={onChange}
        />
      )

    case "checkbox":
      return (
        <CheckBoxComp
          {...props}
          onCheck={onCheck}
        />
      )

    case "select":
      return (
        <SelectComp
          {...props}
          onChange={onChange}
        />
      )

    case "radio":
      return (
        <RadioGroupComp
          {...props}
          onChange={onChange}
        />
      )

    default:
      return null
  }
}
export default FormDetailsComp
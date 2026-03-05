export const validationFun = (formData, configData) => {
  return configData.reduce((errors, field) => {

    const value = formData[field.name]
    console.log("formData", formData)
    // ✅ Required validation
    if (field.required) {
      if (
        !value ||
        (typeof value === "string" && value.trim() === "") ||
        (Array.isArray(value) && value.length === 0)
      ) {
        errors[field.name] = field.error
        return errors
      }
    }

    // ✅ Pattern validation
    if (field.pattern && value) {
      const rx = new RegExp(field.pattern)
      if (!rx.test(value)) {
        errors[field.name] = field.error
      }
    }

    return errors

  }, {})
}

// const isValidName = (n) => {
//   let name = n.split(" ").length
//   if (name <= 2) return true
// }
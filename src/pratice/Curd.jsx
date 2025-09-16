import { useState } from "react"

const Crude = () => {
  const [name, setName] = useState("")
  const [displayName, setDisplayName] = useState([])
  const [editId, setEditId] = useState(null)

  const handleSubmit = () => {
    if (!name.trim()) return

    if (editId !== null) {
      // Update
      const updatedUser = [...displayName]
      updatedUser[editId] = name
      setDisplayName(updatedUser)
      setEditId(null)
    } else {
      // Create
      setDisplayName([...displayName, name])
    }
    setName("")
  }

  const handleDelete = (i) => {
    // Delet
    setDisplayName(displayName.filter((_, index) => index !== i))
  }

  const handleEdit = (i) => {
    setName(displayName[i])
    setEditId(i)
  }

  return (
    <div>
      <input
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {editId !== null ? "Update" : "Add"}
      </button>

      <div>
        {displayName.map((item, i) => (
          <div key={i}>
            {item}
            <button onClick={() => handleEdit(i)}>Edit</button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Crude

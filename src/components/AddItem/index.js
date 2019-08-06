import React, { useState } from "react"
import addIcon from "../../assets/addIcon.png"

import "./AddItem.css"
function AddItem({ placeholder, addItem }) {
  const [itemName, setitemName] = useState("")

  const handleChange = event => {
    setitemName(event.target.value)
  }

  return (
    <div className="AddItem">
      <img
        src={addIcon}
        onClick={() => addItem(itemName, setitemName)}
        alt="add-icon"
      />
      <input
        placeholder={placeholder}
        value={itemName}
        onChange={handleChange}
        maxLength="50"
      />
    </div>
  )
}

export default AddItem

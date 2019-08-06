import React from "react"
import "./ToDo.css"

function ToDo({ name, checked, handleCheck }) {
  return (
    <div className={checked ? "ToDo-checked" : "ToDo"}>
      <label className="ToDo-content">
        <input
          name={name}
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
        />
        {name}
      </label>
    </div>
  )
}

export default ToDo

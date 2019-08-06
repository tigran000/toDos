import React from "react"

import ToDo from "./ToDo"
import AddItem from "../AddItem"

import "./ToDos.css"
export default ({ selectedList, addToDo, handleCheck }) => {
  const done = selectedList.toDos.filter(toDo => toDo.checked === true)
  return (
    <div className="ToDos">
      <div className="ToDos-list">
        <h1 className="title"> {selectedList.name}</h1>
        <div className="done">
          {done.length} of {selectedList.toDos.length} Done
        </div>
        {selectedList.toDos.map(toDo => (
          <ToDo
            key={toDo.name}
            name={toDo.name}
            checked={toDo.checked}
            handleCheck={handleCheck}
          />
        ))}
      </div>
      <AddItem placeholder="Enter new list name" addItem={addToDo} />
    </div>
  )
}

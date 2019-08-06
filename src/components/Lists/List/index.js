import React from "react"
import "./List.css"

function ToDoList({ list, selectList, selectedList }) {
  return (
    <button
      name={list.name}
      onClick={selectList}
      className={list.name === selectedList.name ? "selected" : null}
    >
      {list.name}
    </button>
  )
}

export default ToDoList

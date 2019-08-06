import React, { useState } from "react"
import List from "./List"
import AddItem from "../AddItem"
import "./Lists.css"

function Lists({ allLists, selectList, addList, selectedList }) {
  const [searchValue, setSearchValue] = useState("")
  const [foundList, setFoundList] = useState([])

  const searchList = event => {
    const searchString = event.target.value.trim().toLowerCase()
    const filteredListsNames = allLists.filter(list =>
      list.name.toLowerCase().match(searchString)
    )
    setSearchValue(event.target.value)
    setFoundList(filteredListsNames)
  }

  let lists
  if (searchValue.trim()) {
    lists = foundList
  } else {
    lists = allLists
  }

  return (
    <div className="Lists">
      <h2 className="title"> Todo Lists</h2>
      <input
        onChange={searchList}
        value={searchValue}
        className="search"
        placeholder="Search for List"
        maxLength="40"
      />
      <div className="Lists-names">
        {lists.map(list => (
          <List
            list={list}
            selectList={selectList}
            key={list.name}
            selectedList={selectedList}
          />
        ))}
      </div>
      <AddItem placeholder="Enter new list name" addItem={addList} />
    </div>
  )
}

export default Lists

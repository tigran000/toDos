import React, { useState } from "react"
import Swal from "sweetalert2"
import Lists from "./components/Lists"
import ToDos from "./components/ToDos"

import "./App.css"

function App() {
  const [allLists, setAllLists] = useState([
    { name: "Private", toDos: [] },
    { name: "Work", toDos: [] },
    { name: "Training", toDos: [] },
    { name: "Friends", toDos: [] }
  ])
  const [selectedList, setSelectedList] = useState(allLists[0])

  const selectList = event => {
    const selectedList = allLists.find(list => list.name === event.target.name)
    setSelectedList(selectedList)
  }

  const addList = (newList, setListName) => {
    if (!newList) {
      Swal.fire("Oops...", "Provide name for list", "error")
    } else if (allLists.find(list => list.name === newList)) {
      Swal.fire("Oops...", "Such list name already exist", "error")
    } else {
      setAllLists([
        ...allLists,
        {
          name: newList,
          toDos: []
        }
      ])
      setListName("")
    }
  }

  const addToDo = (newToDo, setToDoName) => {
    const selectedListIndex = allLists.findIndex(
      list => list.name === selectedList.name
    )
    if (!newToDo) {
      Swal.fire("Oops...", "Provide to do description", "error")
    } else if (
      allLists[selectedListIndex].toDos.find(toDo => toDo.name === newToDo)
    ) {
      Swal.fire("Oops...", "Such to do description already exist", "error")
    } else {
      const clonedList = allLists.slice(0)
      clonedList[selectedListIndex].toDos = [
        ...clonedList[selectedListIndex].toDos,
        { name: newToDo, checked: false }
      ]

      setAllLists(clonedList)
      setToDoName("")
    }
  }

  const handleCheck = event => {
    const selectedListIndex = allLists.findIndex(
      list => list.name === selectedList.name
    )

    const selectedToDoIndex = allLists[selectedListIndex].toDos.findIndex(
      toDo => toDo.name === event.target.name
    )

    const clonedList = allLists.slice(0)

    clonedList[selectedListIndex].toDos[
      selectedToDoIndex
    ].checked = !clonedList[selectedListIndex].toDos[selectedToDoIndex].checked

    setAllLists(clonedList)
  }

  return (
    <div className="App">
      <Lists
        allLists={allLists}
        selectList={selectList}
        addList={addList}
        selectedList={selectedList}
      />
      <ToDos
        selectedList={selectedList}
        addToDo={addToDo}
        handleCheck={handleCheck}
      />
    </div>
  )
}

export default App

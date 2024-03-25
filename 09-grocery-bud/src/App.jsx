import React, { useState, useEffect ,useRef } from "react"
import EditSVG from "../public/edit.svg"
import DeleteSVG from "../public/delete.svg"
import { useDispatch, useSelector } from "react-redux"
import { addTodos, doneTodos, removeTodos, updateTodos,fetchAllTodos } from "./fetaures/todo/todoSlice"

function App() {
  const dispatch = useDispatch()
  const TASKS = useSelector(state => state.todos)

  const [inputValue, setinputValue] = useState("")
  const [editActive, seteditActive] = useState(false)
const [editItemId, seteditItemId] = useState("")

useEffect(() => {
  // Load tasks from localStorage when the component mounts
  try {
    let storedTasks = localStorage.getItem("todos");
    const defaultTasks = [{"id":"1","name":"Dummy task ..","isDone":false}];
  
    if (storedTasks) {
      storedTasks = JSON.parse(storedTasks);
    } else {
      storedTasks = defaultTasks;
    }

    dispatch(fetchAllTodos(storedTasks));
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    // Optionally handle the error or set default tasks
    dispatch(fetchAllTodos([{"id":"1","name":"Dummy task ..","isDone":false}]));
  }
}, []);

useEffect(() => {
  // Update localStorage whenever TASKS changes
  try {
    let tasksToStore = TASKS || [{"id":"1","name":"Dummy task ..","isDone":false}];
    localStorage.setItem("todos", JSON.stringify(tasksToStore));
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
    // Optionally handle the error
  }
}, [TASKS]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleAdd()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [inputValue])

  const handleAdd = (e) => {
    if (inputValue && !editActive) {
      dispatch(addTodos({ inputValue: inputValue, isDone: false }))
      setinputValue("")
    }
    if(inputValue && editActive){
      dispatch(updateTodos({id:editItemId,inputValue:inputValue}))
      setinputValue("")
    }
    
    
    seteditActive(false)
  }

const handleDone = (item) => {
  dispatch(doneTodos({ id: item.id }))
  
}

const handleDelete = (item) => {
  dispatch(removeTodos({ id: item.id }))
}

const handleEdit = (item) => {
  seteditItemId(item.id)
  seteditActive(true)
  {setinputValue(item.name)}[editActive]


  console.log("setedititem id is "+editItemId)
 
}

return (
  <div className="App bg-red-300 h-screen flex justify-center items-center">
    <div className="container bg-white flex flex-col justify-center items-center  border border-slate-500 rounded-lg shadow-lg w-[80vw] md:text-4xl  lg:w-[50vw] ">
      <h1 className="text-3xl font-bold mt-5">Grocery Bud</h1>
      <p className="paragraph-below-header text-xl">Using... Redux-Toolkit</p>
      <div className="input-wrapper mt-5 flex justify-between w-full h-full">
        <input
          type="text"
          className="input h-full outline-none px-4 py-1 bg-slate-300 text-4xl text-black w-full md:2xl"
          placeholder="Item"
          onChange={(e) => setinputValue(e.target.value)}
          value={inputValue}
        />
        <button className="button bg-sky-500 px-4 py-1" onClick={handleAdd}>
          {editActive ? "Update" : "Add"}
        </button>
      </div>
      <div
        className="tasks-wrapper flex flex-col gap-2 mt-5 w-full overflow-y-auto h-[70vh] "
        style={{
          scrollbarColor: "rgba(0, 0, 0, 0.5)",
          scrollbarWidth: "thin",
          scrollBehavior: "smooth"
        }}
      >
        {TASKS.map((item, index) => (
          <div className="list-wrapper-main mt-5 w-full px-4  " key={item.id}>
            <div
              className="list-border-wrapper flex justify-between items-center border-b border-slate-500 py-2 "
            // onClick={() => handleDone(item)}
            >
              <div
                className={`item w-full text-3xl p-1 overflow-hidden overflow-ellipsis whitespace-nowrap  hover:cursor-pointer ${item.isDone ? "line-through text-slate-500" : ""
                  }`}
                onClick={() => handleDone(item)}
              >
                {item.name}
              </div>
              <div className="item-helper-wrapper flex gap-2 w-full justify-end">
                <div className="item-helper" onClick={() => handleEdit(item)}>
                  <img className="icon w-4 md:w-8" src={EditSVG} alt="" />
                </div>
                <div
                  className="item-helper"
                  onClick={() => handleDelete(item)}
                >
                  <img className="icon w-4 md:w-8" src={DeleteSVG} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)
                }
export default App

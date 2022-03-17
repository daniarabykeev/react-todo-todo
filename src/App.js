import React,{ useState } from "react";
import ToDo from "./components/Todo/ToDo";
import ToDoList from "./components/ToDoList/ToDoList";
import EditModal from "./components/EditModal/EditModal";


import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [tasks, setTasks] = useState([])
  const [show, setShow] = useState(false)
  const [taskToEdit, setTaskToEdit] = useState(null)
  function handlerTask(newObj){

    let newTodos = [...tasks]
    newTodos.push(newObj)
    setTasks(newTodos)
  }
console.log(tasks);

function handleDeleteTask(id){
  let newTaskArray =tasks.filter((item)=>{
    return item.id !== id
  })
  setTasks(newTaskArray)
}

function handleEditTask(editedTask){
  let newTaskArray=tasks.map((item)=>{
    if (editedTask.id !== item.id){
      return item
    }else{
      return editedTask
    }
  })
  setTasks(newTaskArray)
  setShow(false)
}

function getTaskToEdit (task){
  setTaskToEdit(task)
  setShow(true)
}

  return (
    <div className="App">
      <ToDo 
        handlerTask={handlerTask}
      />
      <ToDoList 
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        getTaskToEdit={getTaskToEdit}
      />
     { taskToEdit ?
      <EditModal 
        show={show}
        setShow={setShow}
        handleEditTask={handleEditTask}
        taskToEdit={taskToEdit}
      />: null}

    </div>
  );
}

export default App;

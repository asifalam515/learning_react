import { useImmer } from "use-immer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from './data/tasks';
import taskReducer from "./reducers/taskReducer";
const App = () => {
  const [tasks,dispatch]= useImmer(taskReducer,initialTasks)
  const getNextId = (data)=>{
    const maxId = data.reduce((prev,current)=>prev 
  && prev.id>current.id?prev.id:current.id)
  return maxId+1
  }
  //handlers 
  const handleAddTask = (text)=>{
  dispatch({
    type:"added",
    id:getNextId(),
    text:text,
  })
  }

  const handleChangeTask=(task)=>{
   dispatch({
    type:"changed",
    task:task
   })
  }
  const handleDeleteTask=(taskId)=>{
   dispatch({
    type:'deleted',
    id:taskId
   })

  }
  return (
    <div>
       
         <AddTask onAdd={handleAddTask}></AddTask>
        <TaskList tasks={tasks} handleChangeTask={handleChangeTask}handleDeleteTask={handleDeleteTask} ></TaskList>
    </div>
  );
};

export default App;
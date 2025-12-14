import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from './data/tasks';
const App = () => {
  const [tasks,setTasks]=useState(initialTasks)
  return (
    <div>
       
         <AddTask></AddTask>
        <TaskList tasks={tasks}></TaskList>
    </div>
  );
};

export default App;
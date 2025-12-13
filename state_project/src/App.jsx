import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from './data/tasks';
const App = () => {
  const [tasks,setTasks]=useState(initialTasks)
  return (
    <div>
          <h1>Prague itinerary</h1>
          <p>Here i am going to deep dive about state in react</p>
          <p>state is something you can't even think of it</p>
         <AddTask></AddTask>
        <TaskList tasks={tasks}></TaskList>
    </div>
  );
};

export default App;
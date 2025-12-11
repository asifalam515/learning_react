import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  return (
    <div>
          <h1>Prague itinerary</h1>
         <AddTask></AddTask>
        <TaskList></TaskList>
    </div>
  );
};

export default App;
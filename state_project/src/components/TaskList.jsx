import Task from "./Task";

const TaskList = ({tasks,handleChangeTask,handleDeleteTask}) => {
    return (
                <ul>
                  {tasks.map((task)=>{
                    return <Task key={task.id} task={task} handleChangeTask={handleChangeTask} handleDeleteTask={handleDeleteTask}></Task>
                  })}
            
          </ul>
    );
};

export default TaskList;
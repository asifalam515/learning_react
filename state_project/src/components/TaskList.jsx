import Task from "./Task";

const TaskList = ({tasks}) => {
    return (
                <ul>
                  {tasks.map((task)=>{
                    return <Task id={task.id} ></Task>
                  })}
            
          </ul>
    );
};

export default TaskList;
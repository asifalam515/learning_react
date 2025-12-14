import { useState } from "react";

const Task = ({task,handleDeleteTask,handleChangeTask}) => {
 
    const [isEditing,setIsEditing ] = useState(false)
    let taskContent;
    if(isEditing){
taskContent=(<><input value={task.text}  />
              
              <button onClick={()=>setIsEditing(false)}>Save</button></>)
    }
    else{
        taskContent=(<>{task.text}
        <button onClick={()=>setIsEditing(true)}>Edit</button>        
              </>)
    }
    
    return (
        <>
        <li>
              <label type="checkbox" checked={task.done} onChange={(e)=>handleChangeTask({... task,done:e.target.checked})}> 
              {taskContent}
            
              <button onClick={()=>handleDeleteTask(task.id)}>Delete</button>
              </label>
             
            </li>
            
        </>
    );
};

export default Task;
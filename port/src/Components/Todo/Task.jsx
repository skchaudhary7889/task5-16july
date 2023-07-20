import React from 'react';
import "../allstyle.css"


// the Task component returns  what each task element will look like.And pas parameter ,which use in other component as props to look like that.
const Task = ({task,index,completeTask,removeTask}) => {
  return (
    <>  
    <div className="task" style={{textDecoration:task.completed ? "line-through": " "}}>
      {task.title}
      <button onClick={()=>completeTask(index)} style={{}}>Complete</button>
      <button onClick={()=>removeTask(index)} style={{backgroundColor:"red",}} >x</button>
    </div>
    </>
  )
}

export default Task
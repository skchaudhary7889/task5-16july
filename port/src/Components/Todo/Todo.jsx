import React, { useEffect } from 'react'
import { useState } from 'react'
import Task from './Task'
import CreateTask from './CreateTask'

const Todo = () => {

// this state for task complet and total task,and implemnet in useeffect
  const [taskdone, setTaskDone] = useState()
  const[totaltask,setTotalTask]=useState()


// this state array with two elements.
  const [task, setTask] = useState([
    {
      title: "Grab some Pizza",
      completed: true
  },
  {
      title: "Do your workout",
      completed: true
  },
  {
      title: "Hangout with friends",
      completed: false
  }
  ]);

  // use useeffect to count the task and completed task
  useEffect(()=>{
    
    setTaskDone(task.filter(task => task.completed).length);
    setTotalTask(task.filter(task => task).length)
  })

// add new task 
  const addTask = title => {
    const newTasks = [...task, { title, completed: false }];
    setTask(newTasks);
};

//this is function for complet task button
const completeTask = index => {
  const newTasks = [...task];
  newTasks[index].completed = true;
  setTask(newTasks);
};


// this is delete function 
const removeTask = index => {
  const newTasks = [...task];
  newTasks.splice(index, 1);
  setTask(newTasks);
};

  return (
   <>
   <div className='todo-list'>
    <h1 >To-D<span style={{color:"orange"}}>o-List</span></h1>
    
    <span style={{marginRight:"5rem",}}>Total-Task-Done:({taskdone})</span>
    <span style={{marginLeft:"5rem"}}>Total-Task:({totaltask})</span>
   

    <div className="card">
      {task.map((task,index)=>(
        <Task task={task}
        index={index}
        completeTask={completeTask}
        removeTask={removeTask}
        key={index}/>
      ))}

    </div>
    <div className="creatTask">
      <CreateTask addTask={addTask}/>
    </div>
   </div>
   </>
  )
}

export default Todo;

import React,{useState} from 'react'


// this component take new input and receive addtask props,which is basically the function that adds a new task to the tasks state on the Todo component. 
const CreateTask = ({addTask}) => {

  //this state is create for form field
  const [value, setValue] = useState("");
   
  
  const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      
      addTask(value);
      setValue("");
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    placeholder="Add a new task"
                    onChange={e => setValue(e.target.value)}
                />
            </form>
    </>
  )
}

export default CreateTask;
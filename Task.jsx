import React from 'react'


const Task = ({task, completedtask, deletedtask}) => {

  return (
    <div>
        <button onClick={task.action}> 
     <ul>
        <li>Task: {task.title} </li>
        <li>Number: {task.id}</li>
        <li>Details: {task.description}</li>
        <button onClick={complete}>Complete Task</button>
        <button onClick={erase}>Delete Task</button>
        </ul> </button> </div>
  )
}

export default Task

/* 
import React from 'react'

const Task = ({ content, complete, erase }) => {
    return (
        <>
            <div>
                <h2>{content.title}</h2>
                <p>{content.description}</p>
                <button onClick={complete}>Complete Task</button>
                <button onClick={erase}>Delete Task</button>
            </div>
        </>
    )
}

export default Task

*/

import Task from './Task'

const TaskList = ({tasks}) => {

  const completedTask= (title) => {
    alert(`You are now completing ${title}. `)
  }
  const deletedTask= (title) => {
    alert(`${title} has been removed.`)
  }

  return (
    <>
    {tasks.map((task)=> (
        <Task 
        key={task.id}
        task={task}
        complete={()=> completedTask(task.title)}
        deletedtask={()=> deletedTask(task.title)}
        />
         ))}
         </>
         )
        }
  

export default TaskList
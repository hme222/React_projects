
//creating a reuseable Task component inside TaskList.jsx
// that can only be used inside TaskList.jsx

const Task= () => {
  return (
    <li>
          <h3> Task: Clean Phone Storage</h3>
          <p> Due: 10/25/25</p>
        </li>
  )
}

const TaskList = () => {
  return (
    <>
      <ul> 
        <Task />
        <Task /> 
        <Task /> 
      </ul>
    </>
  )
}

export default TaskList;
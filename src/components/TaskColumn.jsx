import React from 'react'
import Todo from "./assets/direct-hit.png"
const TaskColumn = () => {
  return (
    <section className='task_column'>
        <h2 className='task_column_heading'><img src={Todo} alt=""/>To Do</h2>
    </section>
  )
}

export default TaskColumn

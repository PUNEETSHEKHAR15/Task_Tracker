import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'feb 5th at 2:30',
        reminder: true,
    },
    {
        id: 2,
        text: ' Meeting at school ',
        day: 'feb 5th at 6.30 ',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food shopping',
        day: 'feb 5th at 2:30',
        reminder: false,
    },

])
//delete task 
const deleteTask=(id)=>{
 setTasks(tasks.filter((task)=>task.id!==id))
}
//toggle Reminder
const toggleReminder=(id)=>{
  setTasks(tasks.map((task)=>task.id==id ?{...task,reminder:!task.reminder }:task ))
}
  return (
    <div className="App">

      <Header/>
      {tasks.length>0 ?(<Tasks tasks={tasks} onDelete={deleteTask} ontoggle={toggleReminder}/>):("No tasks to show" ) }
    </div>
  );
}

export default App;

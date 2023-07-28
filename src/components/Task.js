import { FaTimes } from 'react-icons/fa'
function Task({ task, onDelete, ontoggle }) {
    return (
        <div className="task" onDoubleClick={() => ontoggle(task.id)}>
            <h3>{task.text}<FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(task.id)
            } /></h3>
            <p>{task.day}</p>

        </div>
    )
}

export default Task

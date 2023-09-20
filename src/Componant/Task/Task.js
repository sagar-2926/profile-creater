import react from "react";
import "./Task.css"
 const Task  = ({id,Name,City,Education,Age} ) => {
    return (
        <div className="task-container" >
            <p className="task-name">Name:- {Name}</p>
            <p className="task-city">City :- {City}</p>
            <p className="task-education">Education :- {Education}</p>
            <p className="task-age">Age:- {Age}</p>
        </div>
    )
 }
 export default Task 
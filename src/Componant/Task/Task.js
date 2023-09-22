import react from "react";
import "./Task.css"
 const Task  = ({id,Name,City,Education,Age,removeTaskFromlist} ) => {
    return (
        <div className="task-container" key={id}>
            <p className="task-name">Name:- {Name}</p>
            <p className="task-city">City :- {City}</p>
            <p className="task-education">Education :- {Education}</p>
            <p className="task-age">Age:- {Age} </p>
             <span className="task-delet" onClick={()=>{
                removeTaskFromlist(id);
                }}>
                🗑️
             </span>
        </div>

    )
 }
 export default Task
import "./home.css";
import Task from '../../Componant/Task/Task';
import React, { useEffect, useState } from "react";

function Home() {
  const [tasklist, setTasklist] = useState([
    {
      id: 1,
      Name: 'Sagar Wandile',
      City: 'Wardh',
      Education: 'BE',
      Age: 23,
    }
  ])

  const [Name, setName] = useState('');
  const [City, setCity] = useState('');
  const [Education, setEducation] = useState('');
  const [Age, setAge] = useState('');

   

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('tasklist'));
    if(list && list.length > 0) {
        setTasklist(list);
    }
  }, []);

  const saveListToLocalStorage = (tasks) => {
    localStorage.setItem('tasklist', JSON.stringify(tasks));
  };

  const addTaskToList = () => {
    const randomId = Math.floor(Math.random() * 100);
    const obj = {
      id: randomId,
      Name: Name,
      City: City,
      Education: Education,
      Age: Age,
    };
    

    const newTaskList = [...tasklist, obj];
    setTasklist(newTaskList);

    setName('');
    setCity('');
    setEducation('');
    setAge('');

    saveListToLocalStorage(newTaskList);
  }
  const removeTaskFromlist = (id) =>{
   let index ;
   tasklist.forEach ((task,i) =>{
    if(task.id === id){
        index = i
    }
   })

    const tempArray = tasklist;
    tempArray.splice(index, 1);
    setTasklist([...tempArray] );

    saveListToLocalStorage(tempArray); 
  }
 
  return (
    <div className="main-container">
      <h1 className="heading">👉 Create Your Card 📝</h1>

      <div className="container">
        <div className="Imploy-cards">
          <h2>Show list ≡</h2>
          {
            tasklist.map((taskItom, index)=>{
            const { id, Name, City, Education, Age } = taskItom;
            return(
                <Task
                id={id}
                Name={Name}
                City={City}
                Education={Education}
                Age={Age}
                key={index}
                removeTaskFromlist={removeTaskFromlist}
                // obj={taskItom} 
                /> 
            );
          })
          }

        </div>

        <div className="create-inf">
          <h2>Add our information +</h2>
          <div className="form-container">
            <form>
              <input
                type="text"
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Enter your Name"
                className="info-input"
              />

              <input
                type="text"
                value={City}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                placeholder="Enter your City"
                className="info-input"
              />

              <input
                type="text"
                value={Education}
                onChange={(e) => {
                  setEducation(e.target.value);
                }}
                placeholder="Enter your Education"
                className="info-input"
              />

              <input
                type="text"
                value={Age}
                onChange={(e) => {
                  setAge(e.target.value);
                }}
                placeholder="Enter your Age"
                className="info-input"
              />
              <button type="button" className="submit-btn" onClick={addTaskToList}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

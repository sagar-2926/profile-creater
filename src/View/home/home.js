import "./home.css";
import Task from '../../Componant/Task/Task';
import { saveListToLocalStorage } from "../../util/localStorage";
import showToast from 'crunchy-toast';
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
   const [id ,setId] = useState(0);
  const [Name, setName] = useState('');
  const [City, setCity] = useState('');
  const [Education, setEducation] = useState('');
  const [Age, setAge] = useState('');
  const [isEdit , setIsEdit] = useState(false);
   

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('tasklist'));
    if(list && list.length > 0) {
        setTasklist(list);
    }
  }, []);


  const clearInputfield = () => {
    setName('');
    setCity('');
    setEducation('');
    setAge('');
  }
    const findTaskIndexById = (taskid) =>{
        let index ;
      tasklist.forEach ((task,i) =>{
    if(task.id === taskid){
        index = i
    }
   })
     return index;
    }

   const chackRequiredField =() => {
    if (!Name){
        showToast ("Name is required ",'warning',3000);
        return false;
      }

      if (!City){
        showToast (" City required",'warning',3000);
        return false;
      }

      if (!Education){
        showToast (" Education is required",'warning',3000);
        return false;
      }

      if (!Age){
        showToast ("Age is required",'warning',3000);
        return false;
      }
     return true;

   }

  const addTaskToList = () => {
      
   if (chackRequiredField()=== false){
    return;
   }
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

    clearInputfield()
    saveListToLocalStorage(newTaskList);
    showToast('Sussesfully Added', 'success', 3000);

  }
  const removeTaskFromlist = (id) =>{
    const index = findTaskIndexById(id); 
    const tempArray = tasklist;
    tempArray.splice(index, 1);
    setTasklist([...tempArray] );

    saveListToLocalStorage(tempArray); 
    showToast('Delete Sussesfully', 'alert', 3000);
  }

   const setTaskEditable = (id) =>{
        setIsEdit(true);
        setId(id);

      const index = findTaskIndexById(id);
      const currentEditTask = tasklist[index];

    setName(currentEditTask.Name);
    setAge(currentEditTask.Age);
    setCity(currentEditTask.City);
    setEducation(currentEditTask.Education);     
   }
    
   const updateTask = () =>{
    if (chackRequiredField()=== false){
        return;
       }
      const indexToUpdate = findTaskIndexById(id)
;    const tempArray = tasklist;
    tempArray[indexToUpdate] = {
        id :id,
        Name: Name,
        City: City,
        Education: Education,
        Age: Age

    }

    setTasklist([...tempArray]);
    saveListToLocalStorage(tempArray);
      
    setId(0);
    clearInputfield();
    setIsEdit(false);
    showToast('Update Sussesfully', 'info', 3000);

   }
 
  return (
    <div className="main-container">
      <h1 className="heading">👉 Create Your Card 📝</h1>

      <div className="container">
        <div className="Imploy-cards">
          <h2>Show list ≡</h2>
          <div className="home-container">
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
               setTaskEditable ={setTaskEditable}
                // obj={taskItom} 
                /> 
            );
          })
          }
          </div>

        </div>

        <div className="create-inf">
          <h2>
            {isEdit ?`Upadate our information ${id}` : 'Add our information +' }

          </h2>
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

              <div className="info-button" >
                {
                isEdit ? 
                <button type="button" className="submit-btn" onClick={updateTask}>
                Upadate
              </button>
              :
              <button type="button" className="submit-btn" onClick={addTaskToList}>
                 Submit
              </button>
                }

              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

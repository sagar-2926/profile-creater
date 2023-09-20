import "./home.css"
import Task from "../../Componant/Task/Task";
import React, { useState } from "react"

const Home = () => {
      const  [tasklist, setTasklist] = useState([
        {
            id : 1 ,
            Name : 'Sagar Wandile ',
            City : 'Wardh',
            Education :'BE',
            Age : 23,
        },
        {
            id : 2 ,
            Name : 'Saurabh Jaikar ',
            City : 'Nagar',
            Education :'Bcom',
            Age : 21,
        },
        {
            id : 3 ,
            Name : 'Harsh khaikar ',
            City : 'Nagar',
            Education :'BE',
            Age : 22,
        } 
      ]) 
    return (
        <div className="main-container">
            <h1 className="heading">Create Your Card 😎</h1>
       
          <div className="container">
  
             <div className="Imploy-cards">
                <h2>Show list</h2>
               {
                tasklist.map((taskItom,index)=>{

                  const {id , Name , City,Education,Age} = taskItom

                  return <Task id={id} Name={Name} City={City} Education={Education} Age={Age}/>
              
                })
               }





             </div>

             <div className="create-inf">
               <h2>Add our information</h2> 
             </div>

          </div>
       
       
        </div>
    )
}

export default Home 
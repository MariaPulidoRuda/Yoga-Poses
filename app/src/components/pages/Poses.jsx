//import React from 'react'
//import { Link, Outlet } from 'react-router-dom'
//import PoseDetail from './Pose'
//import Nav from '../Nav'
//import { MyState } from '../myState'
import { getData } from '../services/Services'
import { useState, useEffect } from "react"
import './Poses.css'

 
 const Poses = () => {

  const [filter, setFilter] = useState()
  const [posesCollection, setPosesCollection] = useState([]);

  useEffect(()=>{
    (async () => {
      const data = await getData(filter)
      setPosesCollection(data)
    })()
  },[filter])
  console.log(posesCollection)
 
  return (
    <>
     <div>
  <h2 className="titulo"> Search a YOGA POSE</h2>
  </div>
   <input type="text" name="text" className="input" placeholder="Type here" value={filter} onChange={(e) => setFilter(e.target.value)} />
          {posesCollection.map((pose) => (
            <div key={pose.name}>
            <h2>Difficulty</h2>
            <p>{pose.difficulty}</p>
            <h2>Sanskrit Name</h2>
            <p>{pose.Sanskrit}</p>
            <h2>Benefits</h2>
            <p>{pose.Benefits}</p>
            <img className="img" src={pose.Image}/>
            </div>
          ))}
        
    </>
  )
          }
 export default Poses 
 
 
          /* }
function Poses() {
  return (
  <div className="finder">
  <MyState />
  </div>
  )
}

    
crear carpeta services y declarar get poses. luego descomentar todo esto
  const poses = getPoses();
  return (
    <>

      <div>
        <h1>All yoga poses 🧘🏽‍♂️</h1>
        <ul>
          {poses.map((pose) => (
            <li key={pose.id}>
              <Link to={`/poses/${pose.id}`}>
                <PoseDetail pose={pose} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  )
*/

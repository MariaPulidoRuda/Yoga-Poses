//import React from 'react'
//import { Link, Outlet } from 'react-router-dom'
//import PoseDetail from './Pose'
//import Nav from '../Nav'
//import { MyState } from '../myState'
import { getData } from '../services/Services'
import { useState, useEffect } from "react"

 
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
  <h2> Search a YOGA POSE  </h2>
  </div>
    <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <ul>
          {posesCollection.map((pose) => (
            <li key={pose.name}>
            <h1>{pose.name}</h1>
            <h2>{pose.difficulty}</h2>
            <h2>{pose.Sanskrit}</h2>
            </li>
          ))}
        </ul>
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
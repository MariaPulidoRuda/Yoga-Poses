import React from 'react'

const PoseDetail = ({ pose }) => {
  return (
    <>
      <h1>name: {pose.name}</h1>
      <p>difficulty: {pose.difficulty}</p>
      <p>sanskrit: {pose.Sanskrit}</p>
      <p>Benefits: {pose.Benefits}</p>
    </>
  )
}

export default PoseDetail
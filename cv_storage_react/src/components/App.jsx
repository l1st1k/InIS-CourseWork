import { useState } from 'react'
import StackOfCVs from "./StackOfCVs.jsx";
import cvs from "../API/data.js"

function App() {
  return (
      <StackOfCVs cvs={cvs.cvs}/>
  )
}

export default App

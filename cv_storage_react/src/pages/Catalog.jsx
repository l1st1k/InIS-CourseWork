import { useState } from 'react'
import CVStack from "../components/CVStack.jsx";
import cvs from "../API/data.js"

function Catalog() {
  return (
      // Header
      // SearchBar
      <CVStack cvs={cvs.cvs}/>
      // Footer
  )
}

export default Catalog;

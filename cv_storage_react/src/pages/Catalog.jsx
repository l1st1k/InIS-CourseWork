import CVStack from "../components/CVStack.jsx";
import cvs from "../API/data.js"
import Footer from "../components/Footer/Footer.jsx";

function Catalog() {
  return (
      <>
          // Header
          // SearchBar
          <CVStack cvs={cvs.cvs}/>
          <Footer/>
      </>
  )
}

export default Catalog;

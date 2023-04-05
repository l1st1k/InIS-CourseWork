import CVStack from "../components/CV_Components/CVStack.jsx";
import cvs from "../API/data.js";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";

function Catalog() {
  return (
    <>
      <Header />
      <SearchBar />
      <CVStack cvs={cvs.cvs} />
      <Footer />
    </>
  );
}

export default Catalog;

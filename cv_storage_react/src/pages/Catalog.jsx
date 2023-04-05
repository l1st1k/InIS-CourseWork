import CVStack from "../components/CV_Components/CVStack.jsx";
import cvs from "../API/data.js";
import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header.jsx";
import SearchBar from "../components/SearchBar/SearchBar.jsx";
import StyledPagination from "../components/Pagination/StyledPagination.jsx";

function Catalog() {
  return (
    <>
      <Header />
      <SearchBar />
      <CVStack cvs={cvs.cvs} />
      <StyledPagination totalPages={10} />
      <Footer />
    </>
  );
}

export default Catalog;

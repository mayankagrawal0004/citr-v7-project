import { render } from "react-dom";
import SearchParam from "./SearchParam";
import Details from "./Details";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
      <header>
      <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/" element={<SearchParam />} />
      </Routes>
      </BrowserRouter>     
  );
};

render(<App />, document.getElementById("root"));

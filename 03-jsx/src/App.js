import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Details from "./Details";
import SearchParam from "./SearchParam";
import { render } from "react-dom";

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

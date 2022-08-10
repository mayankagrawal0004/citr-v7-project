import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import Details from "./Details";
import SearchParam from "./SearchParam";
import { render } from "react-dom";
import ThemeContext from "./ThemeContext";
import { useState } from "react";

const App = () => {
  const theme = useState("red");
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
      <header>
      <Link to="/">Adopt Me!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />}/>
        <Route path="/" element={<SearchParam />} />
      </Routes>
      </BrowserRouter>     
      </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));

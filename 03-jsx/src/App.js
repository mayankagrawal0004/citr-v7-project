import Pet from "./Pet";
import SearchParam from "./SearchParam";
import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
     <SearchParam></SearchParam>
    </div>
  );
};

render(<App />, document.getElementById("root"));

import { Routes, Route } from "react-router-dom";
import Films from "./Films";
import Characters from "./CharacterItem";
import Planets from "./Planets";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <h1>Star Wars Universe Lookup</h1>
        <Characters />
        <Route path="/" element={<Characters />} />
        <Route path="/films" element={<Films />} />
        <Route path="/planets" element={<Planets />} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import Select from "./pages/Select";
import Board from "./pages/Board";

function App() {
  return (
    <div className="bg-slate-500 h-full w-full">
      <Routes>
        <Route path="/" element={<Select />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;

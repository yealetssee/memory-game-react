import { Route, Routes } from "react-router-dom";
import Select from "./pages/Select";

function App() {
  return (
    <div className="bg-slate-500 h-full w-full">
      <Routes>
        <Route path="/" element={<Select />} />
      </Routes>
    </div>
  );
}

export default App;

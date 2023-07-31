import { Route, Routes } from "react-router-dom";
import Select from "./pages/Select";
import Board from "./pages/Board";
import { useState } from "react";

function App() {
  return (
    <div className="bg-slate-500  h-full w-screen ">
      <Routes>
        <Route path="/" element={<Select />} />
        <Route path={`/board/:id`} element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;

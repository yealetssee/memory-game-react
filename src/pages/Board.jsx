import { useState } from "react";
import { useLocation } from "react-router-dom";
import useBoard from "../hooks/useBoard";
import useClickHandler from "../hooks/useClickHandler";

const Board = () => {
  const location = useLocation();

  const theme = location.state.theme;
  const players = location.state.players;
  const gridSize = location.state.gridSize;
  const gridSizeNumb = gridSize ** 2;
  const totalPairs = gridSizeNumb / 2;
  const [div, setDivs] = useBoard(totalPairs);
  const handleClick = useClickHandler(div, setDivs);

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between">
        <h1 className="text-selectBg text-2xl font-bold">memory</h1>
        <button className="bg-orange w-20 h-10 rounded-3xl text-white text-base font-bold">
          Menu
        </button>
      </div>
      <div
        style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}
        className={`mt-24 grid   ${
          gridSize === 4 ? "gap-3 md:gap-5" : "gap-[9px] md:gap-4"
        } w-[327px] md:w-[572px] mx-auto `}
      >
        {div.map((div) => {
          return (
            <div
              key={div.id}
              className={`bg-buttonBG rounded-full flex justify-center items-center text-white font-bold ${
                gridSize === 4
                  ? "w-[72px] md:w-[118px]"
                  : "w-[48px] md:h-[48px]"
              } ${
                gridSize === 4 ? "h-[72px] md:h-[118px]" : "h-[48px] md:h-20"
              } ${gridSize == 4 ? "text-[40px]" : "text-[24px]"}`}
              onClick={() => handleClick(div.id)}
            >
              {div.flipped ? div.number : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;

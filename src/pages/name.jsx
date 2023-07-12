import { useLocation } from "react-router-dom";

const Board = () => {
  const location = useLocation();

  const theme = location.state.theme;
  const players = location.state.players;
  const gridSize = location.state.gridSize;
  const gridSizeNumb = gridSize ** 2;
  const totalPairs = gridSizeNumb / 2;

  const numbers = Array.from({ length: totalPairs }, (_, index) => index + 1);
  const numberPairs = [...numbers, ...numbers];
  const shuffledPairs = shuffleArray(numberPairs);

  const renderDivs = shuffledPairs.map((number, index) => ({
    id: index,
    number: number,
    flipped: false,
    matched: false,
  }));
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between">
        <h1 className="text-selectBg text-2xl font-bold">memory</h1>
        <button className="bg-orange w-20 h-10 rounded-3xl text-white text-base font-bold">
          Menu
        </button>
      </div>
      <div
        className={`mt-24 grid grid-cols-${gridSize}   ${
          gridSize === 4 ? "gap-3 md:gap-5" : "gap-[9px] md:gap-4"
        } w-[327px] md:w-[572px] mx-auto `}
      >
        {renderDivs.map((div) => {
          return (
            <div
              key={div.id}
              className={`bg-buttonBG rounded-full flex justify-center items-center text-white font-bold ${
                (gridSize === 4
                  ? "w-[72px] md:h-[118px]"
                  : "w-[48px] md:h-[118px]",
                gridSize === 4 ? "h-[72px] md:h-[118px]" : "h-[48px] md:h-20")
              } ${gridSize == 4 ? "text-[40px]" : "text-[24px]"}`}
            >
              {div.number}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;

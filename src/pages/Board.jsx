import { Link, useLocation, useParams } from "react-router-dom";
import { useBoard, useClickHandler } from "../hooks";
import { useMediaQuery } from "react-responsive";
import ModalMenu from "../components/ModalMenu";
import { useState } from "react";
import Stopwatch from "../components/Stopwatch";

const Board = () => {
  const location = useLocation();

  const theme = location.state.theme;
  const players = location.state.players;
  const gridSize = location.state.gridSize;
  const gridSizeNumb = gridSize ** 2;
  const totalPairs = gridSizeNumb / 2;
  const [div, setDivs] = useBoard(totalPairs);
  const handleClick = useClickHandler(div, setDivs);
  const notMobile = useMediaQuery({ minWidth: 768 });
  const [openModal, setOpenModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const clickHandler = () => {
    setOpenModal(true), setIsPaused(true);
  };

  return (
    <div className="p-6 bg-white">
      <div className="flex justify-between ">
        <h1 className="text-selectBg text-2xl md:text-forty font-bold">
          memory
        </h1>
        {notMobile ? (
          <div>
            <Link reloadDocument>
              <button className="bg-orange w-notMobile h-13 rounded-3xl text-white text-xl font-bold mr-4">
                Restart
              </button>
            </Link>
            <Link to={"/"}>
              <button className="bg-lightGray w-[149px] h-13 rounded-3xl text-buttonBG  font-bold text-xl">
                New Game
              </button>
            </Link>
          </div>
        ) : (
          <button
            onClick={clickHandler}
            className="bg-orange w-20 h-10 rounded-3xl text-white text-base font-bold"
          >
            Menu
          </button>
        )}
        {openModal && (
          <ModalMenu setOpenModal={setOpenModal} setIsPaused={setIsPaused} />
        )}
      </div>

      <div
        style={{ gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))` }}
        className={`mt-20 md:mt-28 grid   ${
          gridSize === 4
            ? "gap-3 md:gap-5 w-container md:w-[532px]"
            : "gap-[9px] md:gap-4 w-container md:w-[572px] "
        }   mx-auto `}
      >
        {div.map((div) => {
          return (
            <div
              key={div.id}
              className={`${
                div.matched
                  ? "bg-orange"
                  : div.flipped
                  ? "bg-buttonLight"
                  : "bg-buttonBG"
              } rounded-full flex justify-center items-center text-white font-bold ${
                gridSize === 4
                  ? "w-[72px] md:w-[118px]"
                  : "w-[48px] md:w-[82px]"
              } ${
                gridSize === 4 ? "h-[72px] md:h-[118px]" : "h-[48px] md:h-20"
              } ${gridSize == 4 ? "text-[40px]" : "text-[24px]"}`}
              onClick={() => handleClick(div.id)}
            >
              {div.flipped ? div.value : ""}
            </div>
          );
        })}
      </div>
      <Stopwatch isPaused={isPaused} />
    </div>
  );
};

export default Board;

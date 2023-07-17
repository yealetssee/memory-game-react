import { Link, useLocation, useParams } from "react-router-dom";
import { useBoard, useClickHandler } from "../hooks";
import { useMediaQuery } from "react-responsive";
import ModalMenu from "../components/ModalMenu";
import { useEffect, useState } from "react";
import Stopwatch from "../components/Stopwatch";
import MovesCounter from "../components/MovesCounter";
import WinModal from "../components/WinModal";

const Board = () => {
  const location = useLocation();

  const theme = location.state.theme;
  const players = location.state.players;
  const gridSize = location.state.gridSize;
  const gridSizeNumb = gridSize ** 2;
  const totalPairs = gridSizeNumb / 2;
  const [div, setDivs] = useBoard(totalPairs);
  const [moves, setMoves] = useState(0);
  const handleClick = useClickHandler(div, setDivs, setMoves);
  const notMobile = useMediaQuery({ minWidth: 768 });
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [victory, setVictory] = useState(false);

  const clickHandler = () => {
    setOpenModal(true), setIsPaused(true);
  };

  const check = div.every((div) => {
    return div.matched;
  });

  useEffect(() => {
    if (check) {
      setVictory(true);
      setIsPaused(true);
    }
  }, [check]);

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
        {victory && (
          <WinModal minutes={minutes} seconds={seconds} moves={moves} />
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
              } rounded-full flex justify-center items-center text-white font-bold  transition-all ${
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
      <div className=" mx-auto mt-24 flex justify-between">
        <Stopwatch
          isPaused={isPaused}
          minutes={minutes}
          seconds={seconds}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
        <MovesCounter moves={moves} />
      </div>
    </div>
  );
};

export default Board;

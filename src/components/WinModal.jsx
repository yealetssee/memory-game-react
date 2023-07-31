import { Link } from "react-router-dom";
const WinModal = ({ minutes, seconds, moves }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-modalWrapper">
      <div className="w-container h-[376px] bg-modalwhite rounded-xl px-6 pb-4 pt-8 flex items-center flex-col md:w-[654px] md:h-[510px] md:pt-12 ">
        <p>
          <span className="text-selectBg text-2xl font-bold md:text-5xl">
            You did it!
          </span>
        </p>
        <p>
          <span className="text-Light text-base font-bold md:text-lg">
            Game over! Here's how you got on…
          </span>
        </p>
        <div className="w-big h-12 bg-lightGray flex justify-between items-center px-4 rounded-md mt-6 md:w-[542px] md:h-box md:mt-10">
          <span className="text-thirteen font-bold text-Light md:text-lg">
            Time Elapsed
          </span>
          <span className="text-buttonBG text-xl font-bold md:text-3xl">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="w-big h-12 bg-lightGray flex justify-between items-center px-4 rounded-md mt-2 md:w-[542px] md:h-box md:mt-4">
          <span className="text-thirteen font-bold text-Light md:text-lg">
            Moves Taken
          </span>
          <span className="text-buttonBG text-xl font-bold md:text-3xl">
            {moves} MOVES
          </span>
        </div>
        <div className="flex mt-6 md:mt-10 flex-col gap-4 md:flex-row">
          <Link reloadDocument>
            <button className="bg-orange w-big md:w-[264px]  h-12 rounded-3xl text-white text-xl font-bold   ">
              Restart
            </button>
          </Link>
          <Link to={"/"}>
            <button className="bg-lightGray w-big md:w-[264px] h-12 rounded-3xl text-buttonBG  font-bold text-xl ">
              Setup New Game
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default WinModal;

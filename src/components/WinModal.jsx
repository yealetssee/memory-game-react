import { Link } from "react-router-dom";
const WinModal = ({ minutes, seconds, moves }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-modalWrapper">
      <div className="w-container h-[376px] bg-modalwhite rounded-xl px-6 pb-4 pt-8 flex items-center flex-col">
        <p>
          <span className="text-selectBg text-2xl font-bold">You did it!</span>
        </p>
        <p>
          <span className="text-Light text-base font-bold">
            Game over! Here's how you got on…
          </span>
        </p>
        <div className="w-big h-12 bg-lightGray flex justify-between items-center px-4 rounded-md mt-6">
          <span className="text-thirteen font-bold text-Light">
            Time Elapsed
          </span>
          <span className="text-buttonBG text-xl font-bold">
            {minutes.toString().padStart(2, "0")}:
            {seconds.toString().padStart(2, "0")}
          </span>
        </div>
        <div className="w-big h-12 bg-lightGray flex justify-between items-center px-4 rounded-md mt-2">
          <span className="text-thirteen font-bold text-Light">
            Moves Taken
          </span>
          <span className="text-buttonBG text-xl font-bold">{moves} MOVES</span>
        </div>
        <Link reloadDocument>
          <button className="bg-orange w-big  h-12 rounded-3xl text-white text-xl font-bold mt-6  ">
            Restart
          </button>
        </Link>
        <Link to={"/"}>
          <button className="bg-lightGray w-big h-12 rounded-3xl text-buttonBG  font-bold text-xl mt-4">
            Setup New Game
          </button>
        </Link>
      </div>
    </div>
  );
};
export default WinModal;

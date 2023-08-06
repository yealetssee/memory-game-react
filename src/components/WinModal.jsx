import { Link } from "react-router-dom";
const WinModal = ({ minutes, seconds, moves, players, playersList }) => {
  const highestScore = Math.max(
    ...playersList.map((player) => {
      return player.score;
    }),
  );
  const winners = playersList.filter((player) => {
    return player.score === highestScore;
  });

  return players === 1 ? (
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
  ) : (
    <div className="top-0 left-0 fixed w-full h-screen flex justify-center items-center bg-modalWrapper">
      <div className="w-container h-auto bg-modalwhite rounded-xl px-6 pb-4 pt-8 flex items-center flex-col md:w-[654px]  md:pt-12">
        <p>
          {/* {winners.length > 1 && (
            <span className="text-selectBg text-2xl font-bold md:text-5xl">
              {winners.length === 1 ? `${winners[0].name} wins!` : "It's a tie"}
            </span>
          )} */}
          {winners.length > 0 ? (
            <span className="text-selectBg text-2xl font-bold md:text-5xl">
              {winners.length === 1
                ? `${winners[0].name} wins!`
                : "It's a tie!"}
            </span>
          ) : null}
        </p>
        <p className="mb-6">
          <span className="text-Light text-base font-bold md:text-lg ">
            Game over! Here are the results…
          </span>
        </p>
        <div className="flex flex-col gap-4">
          {playersList.map((player, index) => {
            const { isWinner } = player;
            return (
              <div
                key={index}
                className={`w-big h-12 ${
                  isWinner ? "bg-selectBg" : "bg-lightGray"
                }  flex justify-between items-center px-4 rounded-md  md:w-[542px] md:h-box `}
              >
                <span
                  className={`text-thirteen font-bold ${
                    isWinner ? "text-white" : "text-Light"
                  } md:text-lg`}
                >
                  {player.name}
                </span>
                <span
                  className={`${
                    isWinner ? "text-white" : "text-buttonBG"
                  } text-xl font-bold md:text-3xl`}
                >
                  {player.score} Pairs
                </span>
              </div>
            );
          })}
          <div className="flex mt-1 md:mt-10 flex-col gap-4 md:flex-row">
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
    </div>
  );
};
export default WinModal;

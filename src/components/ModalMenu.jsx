import { Link } from "react-router-dom";

const ModalMenu = ({ setOpenModal, setIsPaused }) => {
  const clickHandler = () => {
    setOpenModal(false), setIsPaused(false);
  };
  return (
    <div className="fixed left-0 top-0 w-full h-screen overflow-y-scroll flex justify-center items-center  bg-modalWrapper">
      <div className="w-container h-56 bg-modalwhite rounded-xl p-6 flex flex-col gap-4">
        <Link reloadDocument>
          <button className="bg-orange w-big  h-12 rounded-3xl text-white text-xl font-bold mr-4 ">
            Restart
          </button>
        </Link>
        <Link to={"/"}>
          <button className="bg-lightGray w-big h-12 rounded-3xl text-buttonBG  font-bold text-xl">
            New Game
          </button>
        </Link>

        <button
          onClick={clickHandler}
          className="bg-lightGray w-big h-12 rounded-3xl text-buttonBG  font-bold text-xl"
        >
          Resume Game
        </button>
      </div>
    </div>
  );
};
export default ModalMenu;

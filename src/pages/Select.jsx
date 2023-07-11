import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Select = () => {
  const [theme, setTheme] = useState("Numbers");
  const [players, setPlayers] = useState(1);
  const [gridSize, setGridSize] = useState(4);
  const navigate = useNavigate();

  return (
    <div className="h-auto w-screen bg-selectBg  flex  flex-col items-center  box-border pb-28 ">
      <div className="logo text-[32px] font-bold text-white  mt-20  ">
        <h1>memory</h1>
      </div>
      <section className="bg-white w-[327px] mx-auto md:w-[654px]  h-auto rounded-[10px] mt-11 flex flex-col p-6 md:py-14 md:items-center  ">
        <div className="w-full  md:px-7 ">
          <p className=" text-base md:text-xl font-bold text-Light">
            Select Theme
          </p>
          <button
            onClick={() => setTheme("Numbers")}
            className={`w-31 md:w-64 h-10 ${
              theme === "Numbers" ? "bg-buttonBG" : "bg-buttonLight"
            }  rounded-xxl text-white text-base md:text-2xl font-bold mr-2 md:mr-8 mt-2`}
          >
            Numbers
          </button>
          <button
            onClick={() => setTheme("Icons")}
            className={`w-31 md:w-64 h-10 ${
              theme === "Icons" ? "bg-buttonBG" : "bg-buttonLight"
            }  rounded-xxl text-white text-base md:text-2xl font-bold mt-2`}
          >
            Icons
          </button>
        </div>
        <div className="mt-6">
          <p className=" text-base md:text-xl font-bold text-Light">
            Numbers of Players
          </p>
          <div className="mt-3 flex   gap-3 md:gap-5">
            <button
              onClick={() => setPlayers(1)}
              className={`h-10 w-15 md:w-lgNumb  text-white rounded-xxl font-bold md:text-medium ${
                players === 1 ? "bg-buttonBG" : "bg-buttonLight"
              }`}
            >
              1
            </button>
            <button
              onClick={() => setPlayers(2)}
              className={`h-10 w-15 md:w-lgNumb bg-buttonBG text-white rounded-xxl font-bold md:text-medium ${
                players === 2 ? "bg-buttonBG" : "bg-buttonLight"
              }`}
            >
              2
            </button>
            <button
              onClick={() => setPlayers(3)}
              className={`h-10 w-15 md:w-lgNumb bg-buttonBG text-white rounded-xxl font-bold md:text-medium ${
                players === 3 ? "bg-buttonBG" : "bg-buttonLight"
              } `}
            >
              3
            </button>
            <button
              onClick={() => setPlayers(4)}
              className={`h-10 w-15 md:w-lgNumb bg-buttonBG text-white rounded-xxl font-bold md:text-medium ${
                players === 4 ? "bg-buttonBG" : "bg-buttonLight"
              } `}
            >
              4
            </button>
          </div>
        </div>
        <div className="mt-6">
          <p className=" text-base md:text-xl font-bold text-Light">
            Grid Sizes
          </p>
          <div className="mt-3">
            <button
              onClick={() => setGridSize(4)}
              className={`w-31 md:w-64 h-10   rounded-xxl text-white text-base md:text-2xl font-bold mr-2 md:mr-8 mt-2 ${
                gridSize === 4 ? "bg-buttonBG" : "bg-buttonLight"
              }`}
            >
              4x4
            </button>
            <button
              onClick={() => setGridSize(6)}
              className={`w-31 md:w-64 h-10   rounded-xxl text-white text-base md:text-2xl font-bold mt-2 ${
                gridSize === 6 ? "bg-buttonBG" : "bg-buttonLight"
              }`}
            >
              6x6
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate()}
          className="mt-8 w-big md:w-[541px] h-12 bg-orange rounded-xxl text-white font-bold text-lg"
        >
          Start Game
        </button>
      </section>
    </div>
  );
};

export default Select;
import { useEffect, useState } from "react";

const Stopwatch = ({ isPaused, minutes, seconds, setMinutes, setSeconds }) => {
  useEffect(() => {
    let interval = null;

    const updateStopwatch = () => {
      if (!isPaused) {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    };
    interval = setInterval(updateStopwatch, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    }
  }, [seconds]);

  return (
    <div className="inline-block mr-6">
      <div className="w-[151px] h-box bg-lightGray flex flex-col items-center  py-2  rounded-md">
        <span className="text-Light text-base font-bold">Time</span>
        <p className="text-buttonBG font-bold text-2xl">
          {minutes.toString().padStart(2, "0")}:
          {seconds.toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};
export default Stopwatch;

const MovesCounter = ({ moves }) => {
  return (
    <div className="inline-block">
      <div className="w-[151px] h-box bg-lightGray flex flex-col items-center  py-2  rounded-md  md:w-64">
        <span className="text-Light text-base font-bold">Moves</span>
        <p className="text-buttonBG font-bold text-2xl">{moves}</p>
      </div>
    </div>
  );
};

export default MovesCounter;

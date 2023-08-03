import { useMediaQuery } from "react-responsive";

const MultiplayerPoints = ({ score, active, name }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });

  return isMobile ? (
    active ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="78"
        viewBox="0 0 64 78"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 0L24 8H5C2.23858 8 0 10.2386 0 13V73C0 75.7614 2.23858 78 5 78H59C61.7614 78 64 75.7614 64 73V13C64 10.2386 61.7614 8 59 8H40L32 0Z"
          fill="#FDA214"
        />
        <text
          x="50%"
          y="40%" // Adjust this value to change the vertical position of the text
          textAnchor="middle"
          fill="white"
          className="text-base font-bold"
        >
          {name}
        </text>
        <text
          x="50%"
          y="80%" // Adjust this value to change the vertical position of the text
          textAnchor="middle"
          fill="white"
          className="font-bold text-2xl "
        >
          {score}
        </text>
      </svg>
    ) : (
      <div className="w-16 h-[70px]  bg-lightGray mt-2 rounded-lg flex flex-col items-center justify-start font-bold text-2xl text-base">
        <span className="text-Light">{name}</span>
        <span className="text-buttonBG">{score}</span>
      </div>
    )
  ) : active ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="164"
      height="92"
      viewBox="0 0 164 92"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82 0L70 12H10C4.47715 12 0 16.4772 0 22V82C0 87.5229 4.47715 92 10 92H154C159.523 92 164 87.5229 164 82V22C164 16.4772 159.523 12 154 12H94L82 0Z"
        fill="#FDA214"
      />
      <text
        x="50%"
        y="40%" // Adjust this value to change the vertical position of the text
        textAnchor="middle"
        fill="white"
        className="font-bold text-2xl "
      >
        {name}
      </text>
      <text
        x="50%"
        y="80%" // Adjust this value to change the vertical position of the text
        textAnchor="middle"
        fill="white"
        className="font-bold text-2xl "
      >
        {score}
      </text>
    </svg>
  ) : (
    <div className="w-[164px] h-20 mt-3 rounded-xl bg-lightGray flex flex-col items-center justify-start font-bold text-2xl">
      <span className="text-Light">{name}</span>
      <span className="text-buttonBG">{score}</span>
    </div>
  );
};

export default MultiplayerPoints;

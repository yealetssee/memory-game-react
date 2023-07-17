import { useState } from "react";
const useBoard = (totalPairs) => {
  const numbers = Array.from({ length: totalPairs }, (_, index) => index + 1);

  const numberPairs = [...numbers, ...numbers];
  const shuffledPairs = shuffleArray(numberPairs);
  const [div, setDivs] = useState(
    shuffledPairs.map((number, index) => ({
      id: index,
      value: number,
      flipped: false,
      matched: false,
    })),
  );
  function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  return [div, setDivs];
};
export default useBoard;

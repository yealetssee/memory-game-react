import { useState } from "react";
import {
  Anchor,
  Apple,
  Ball,
  Bomb,
  Camera,
  Car,
  Flask,
  Hand,
  Lemon,
  Lightbulb,
  Linux,
  Lra,
  Moon,
  Paperplane,
  Plane,
  React,
  Snowflake,
  Star,
  Sun,
} from "../iconss/";

const useBoard = (totalPairs, theme) => {
  const getValuesByTheme = (totalPairs, theme) => {
    if (theme === "numbers") {
      return Array.from({ length: totalPairs }, (_, index) => index + 1);
    } else if (theme === "icons") {
      const iconArray = [
        Anchor,
        Ball,
        Car,
        Flask,
        Hand,
        Lra,
        Moon,
        Snowflake,
        Sun,
        Apple,
        Lemon,
        Lightbulb,
        Linux,
        Paperplane,
        Plane,
        React,
        Star,
        Camera,
        Bomb,
      ];
      return Array.from(
        { length: totalPairs },
        (_, index) => iconArray[(index % iconArray.length) + 1],
      );
    }
  };

  const arr = getValuesByTheme(totalPairs, theme);
  const Pairs = [...arr, ...arr];
  const shuffledPairs = shuffleArray(Pairs);

  const [div, setDivs] = useState(
    shuffledPairs.map((value, index) => ({
      id: index,
      value: value,
      flipped: false,
      matched: false,
      justMatched: false,
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

import { useState } from "react";
const useClickHandler = (
  div,
  setDivs,
  setMoves,
  activePlayerIndex,
  dispatch,
) => {
  const [canFlip, setCanFlip] = useState(true);

  const handleClick = (id) => {
    if (!canFlip) {
      return;
    }
    const updatedDivs = div.map((div) => {
      if (div.id === id && !div.flipped && !div.matched) {
        // If the clicked div is not flipped or matched, reveal the number

        return { ...div, flipped: true };
      }
      return div;
    });

    const flippedDivs = updatedDivs.filter(
      (div) => div.flipped && !div.matched,
    );

    if (flippedDivs.length === 2) {
      // If two divs are flipped
      const [div1, div2] = flippedDivs;
      setMoves((totalmoves) => totalmoves + 1);

      if (div1.value === div2.value) {
        div1.matched = true;
        div2.matched = true;
        div1.justMatched = true;
        div2.justMatched = true;
        dispatch({
          type: "Increment_Score",
          playerIndex: activePlayerIndex,
        });

        setTimeout(() => {
          div1.justMatched = false;
          div2.justMatched = false;
        }, 1000);
      } else {
        // If the numbers don't match, flip back the divs after a short delay
        setCanFlip(false);
        setTimeout(() => {
          const resetDivs = updatedDivs.map((div) => {
            if (div.flipped && !div.matched) {
              return { ...div, flipped: false };
            }
            return div;
          });
          setDivs(resetDivs);
          dispatch({ type: "Switch_Player" });
          setCanFlip(true);
        }, 1000);
      }
    }

    setDivs(updatedDivs);
  };
  return handleClick;
};

export default useClickHandler;

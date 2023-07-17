import { useState } from "react";
const useClickHandler = (div, setDivs, setMoves) => {
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
        // If the numbers match, update the matched property
        updatedDivs.forEach((div) => {
          if (div.flipped) {
            div.matched = true;
          }
        });
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
          setCanFlip(true);
        }, 1000);
      }
    }

    setDivs(updatedDivs);
  };
  return handleClick;
};

export default useClickHandler;

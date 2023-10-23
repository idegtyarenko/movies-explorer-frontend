import { useState, useEffect } from "react";

import { getCardsInRow } from "../utils/utils";

export default function usePaginationState(isSavedMovies) {
  const initialCardsInRow = getCardsInRow();
  const initialRows = initialCardsInRow > 1 ? 4 : 5;
  const initialNumber = !isSavedMovies
    ? initialCardsInRow * initialRows
    : Infinity;

  const [shownCardsNumber, setShownCardsNumber] = useState(initialNumber);
  const [batchSize, setBatchSize] = useState(4);

  useEffect(() => {
    if (isSavedMovies) {
      return;
    }

    function computeBatchSize() {
      const cardsInRow = getCardsInRow();
      return cardsInRow > 1 ? cardsInRow : 2;
    }

    const handleResize = () => setBatchSize(computeBatchSize());
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSavedMovies]);

  function loadNewCards() {
    setShownCardsNumber((oldNumber) => oldNumber + batchSize);
  }

  return { shownCardsNumber, loadNewCards };
}

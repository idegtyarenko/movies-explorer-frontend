import { useState, useEffect, useCallback } from "react";

import { getCardsInRow } from "../utils/utils";

export default function usePaginationState(isSavedMovies, query) {
  const computeInitialCardsNumber = useCallback(() => {
    const initialCardsInRow = getCardsInRow();
    const initialRows = initialCardsInRow > 1 ? 4 : 5;
    return !isSavedMovies ? initialCardsInRow * initialRows : Infinity;
  }, [isSavedMovies]);

  function computeBatchSize() {
    const cardsInRow = getCardsInRow();
    return cardsInRow > 1 ? cardsInRow : 2;
  }

  const [shownCardsNumber, setShownCardsNumber] = useState(
    computeInitialCardsNumber(),
  );
  const [batchSize, setBatchSize] = useState(computeBatchSize());

  useEffect(() => {
    setShownCardsNumber(computeInitialCardsNumber());
  }, [query, computeInitialCardsNumber]);

  useEffect(() => {
    if (isSavedMovies) {
      return;
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

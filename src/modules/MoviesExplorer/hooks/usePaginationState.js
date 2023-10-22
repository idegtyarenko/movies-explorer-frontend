import { useState, useEffect } from "react";

import { getCardsInRow } from "../utils/utils";

export default function usePaginationState() {
  const initialCardsInRow = getCardsInRow();
  const initialRows = initialCardsInRow > 1 ? 4 : 5;
  const initialNumber = initialCardsInRow * initialRows;

  const [shownCardsNumber, setShownCardsNumber] = useState(initialNumber);
  const [batchSize, setBatchSize] = useState(4);

  useEffect(() => {
    function computeBatchSize() {
      const cardsInRow = getCardsInRow();
      return cardsInRow > 1 ? cardsInRow : 2;
    }

    const handleResize = () => setBatchSize(computeBatchSize());
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function loadNewCards() {
    setShownCardsNumber((oldNumber) => oldNumber + batchSize);
  }

  return { shownCardsNumber, loadNewCards };
}

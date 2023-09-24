export function isNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "";
}

export function joinClassNames(array) {
  if (!array || array.length === 0) {
    return "";
  }

  return array.reduce((accumulator, value) => {
    if (isNonEmptyString(value)) {
      return [accumulator, value].join(" ");
    }
    return accumulator;
  });
}

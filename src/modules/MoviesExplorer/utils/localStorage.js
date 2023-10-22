import { saveData, loadData } from "utils/utils";

export function saveQuery(data) {
  saveData("query", data);
}

export function saveResult(data) {
  saveData("result", data);
}

export function loadPreviousQuery() {
  return loadData("query");
}

export function loadPreviousResult() {
  return loadData("result");
}

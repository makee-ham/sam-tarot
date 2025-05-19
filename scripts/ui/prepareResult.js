import { state } from "../state.js";
import { resultLoadingStart, resultLoadingOver } from "./pageLoading.js";
import { renderSelectedCards } from "./renderCards.js";

export async function prepareResult() {
  resultLoadingStart();
  try {
    // await 이용, GPT 응답 받아오기
    document.querySelector("#user-question").textContent =
      "질문: " + state.userQuestion;
    renderSelectedCards("drawn-cards");
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    resultLoadingOver();
  }
}

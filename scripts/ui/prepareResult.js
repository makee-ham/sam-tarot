import { state } from "../state.js";
import { fetchGPT } from "../fetchGPT.js";
import { resultLoadingStart, resultLoadingOver } from "./pageLoading.js";
import { renderSelectedCards } from "./renderCards.js";
import { buildPrompt } from "../utils/buildPrompt.js";

export async function prepareResult() {
  resultLoadingStart();
  try {
    document.querySelector("#user-question").textContent =
      "질문: " + state.userQuestion;

    renderSelectedCards("drawn-cards");

    const prompt = buildPrompt();
    const gptReply = await fetchGPT(prompt);

    document.querySelector("#result-output").textContent = gptReply;
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    resultLoadingOver();
  }
}

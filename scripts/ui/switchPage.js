import { prepareDrawingCards } from "./prepareDrawingCards.js";
import { prepareResult } from "./prepareResult.js";
import { addDragScroll } from "./dragScroll.js";

export function switchPage(fromId, toId) {
  const from = document.getElementById(fromId);
  const to = document.getElementById(toId);

  from.classList.add("fade-out");

  setTimeout(() => {
    from.classList.add("hidden");
    from.classList.remove("fade-out");
  }, 400);

  to.classList.remove("hidden");
  to.classList.add("fade-in");

  // 스크롤을 맨 위로 리셋
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    document.querySelectorAll("section").forEach((section) => {
      section.scrollTop = 0;
    });
  }, 50);

  setTimeout(() => {
    to.classList.remove("fade-in");
  }, 400);

  if (toId === "draw") {
    setTimeout(() => {
      prepareDrawingCards();
      const cardContainer = document.querySelector("#card-container");
      addDragScroll(cardContainer);
    }, 400);
  }
  if (toId === "result") {
    setTimeout(() => {
      prepareResult();
    }, 400);
  }
}

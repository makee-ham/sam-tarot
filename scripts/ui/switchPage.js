import { prepareDrawingCards } from "../script.js";
import { addDragScroll } from "./dragScroll.js";

export function switchPage(fromId, toId) {
  const from = document.querySelector(`#${fromId}`);
  const to = document.querySelector(`#${toId}`);

  from.classList.add("hidden");
  from.classList.remove("active");
  to.classList.remove("hidden");
  to.classList.add("active");

  if (toId === "draw") {
    // 페이지 전환 뒤 렌더링 시간... 이후 실행 (repaint 이후 실행 위함)
    setTimeout(() => {
      prepareDrawingCards();

      const cardContainer = document.querySelector("#card-container");
      addDragScroll(cardContainer);
    }, 0);
  }
}

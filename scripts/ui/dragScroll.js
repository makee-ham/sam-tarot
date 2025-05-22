// 카드 마우스 드래그 & 터치 스크롤
export const dragState = {
  isDragging: false,
};

export function addDragScroll(container) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  function start(e, clientX) {
    isDown = true;
    dragState.isDragging = false;
    startX = clientX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.classList.add("dragging");
  }

  function move(e, clientX) {
    if (!isDown) return;
    const x = clientX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) dragState.isDragging = true;
    container.scrollLeft = scrollLeft - walk;
    e.preventDefault();
  }

  function end(e) {
    isDown = false;
    container.classList.remove("dragging");
    if (dragState.isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  container.addEventListener("mousedown", (e) => start(e, e.pageX));
  container.addEventListener("mousemove", (e) => move(e, e.pageX));
  container.addEventListener("mouseup", end);
  container.addEventListener("mouseleave", end);

  container.addEventListener(
    "touchstart",
    (e) => {
      const touch = e.touches[0];
      start(e, touch.pageX);
    },
    { passive: false }
  );

  container.addEventListener(
    "touchmove",
    (e) => {
      const touch = e.touches[0];
      move(e, touch.pageX);
    },
    { passive: false }
  );

  container.addEventListener("touchend", end);
  container.addEventListener("touchcancel", end);
}

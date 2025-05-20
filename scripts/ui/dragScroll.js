// 카드 마우스 드래그 스크롤 & 스와이프
// 움직인 방향과 거리 = 움직인 결과 좌표 - 시작 좌표 (container는 고정이니 .offsetLeft는 상수)
export const dragState = {
  isDragging: false,
};

export function addDragScroll(container) {
  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    dragState.isDragging = false;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.classList.add("dragging");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    // 5px 초과 이동 시 dragging 간주
    if (Math.abs(walk) > 5) {
      dragState.isDragging = true;
    }
    container.scrollLeft = scrollLeft - walk;
    e.preventDefault();
  });

  container.addEventListener("mouseup", (e) => {
    isDown = false;
    container.classList.remove("dragging");

    // 드래그였을 경우 클릭 이벤트 취소
    if (dragState.isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("dragging");
  });
}

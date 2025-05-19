export function switchPage(fromId, toId) {
  const from = document.querySelector(`#${fromId}`);
  const to = document.querySelector(`#${toId}`);
  from.classList.add("hidden");
  from.classList.remove("active");
  to.classList.remove("hidden");
  to.classList.add("active");
}

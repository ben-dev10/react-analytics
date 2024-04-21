function getViewportWidth() {
  // get from documentElement or window objects or default to 0
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
}
window.addEventListener("resize", () => {
  getViewportWidth();
});
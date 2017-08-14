export const padZeroes = (i) => {
  return (i < 10) ? "0" + i : i;
};

export const setPageZoom = (value) => {
  document.getElementById("root").style.zoom = event.target.value;
  return true;
};

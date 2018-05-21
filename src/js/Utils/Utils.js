export const scale = (start, end, percentage, round) => {
  if (round === undefined) {
    round = true;
  }

  let scaledValue = start + ((end - start) * percentage);
  if (round) {
    return Math.round(scaledValue);
  } else {
    return scaledValue;
  }
};


export function randomRange(min, max, decimals=0) {
  let result = Math.random() * (max - min) + min;

  if (decimals === 0) {
    result = Math.floor(result);
  } else {
    result = Math.floor(result * Math.pow(10, decimals)) / Math.pow(10, decimals);
  }

  return result;
}


export const padZeroes = (i) => {
  return (i < 10) ? "0" + i : i;
};


export const setPageZoom = (value) => {
  document.getElementById("root").style.zoom = value;

  return true;
};


export const interpolatePoints = (a, b, ratio) => {
  let x = a.x + (b.x - a.x) * ratio;
  let y = a.y + (b.y - a.y) * ratio;

  return { x, y };
};

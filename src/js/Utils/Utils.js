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
  let result = Math.random() * (max - min + 1) + min;

  if (decimals === 0) {
    result = Math.floor(result);
  } else {
    result = Math.floor(result * (10 * decimals)) / decimals;
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


const clipInput = (k, arr) => {
  if (k < 0)
    k = 0;
  if (k > arr.length - 1)
    k = arr.length - 1;
  return arr[k];
};


const getTangent = (k, factor, array) => {
  return factor * (clipInput(k + 1, array) - clipInput(k - 1,array)) / 2;
};


export const interpolate = (array, t, tangentFactor) => {
  if (tangentFactor == null) {
    tangentFactor = 1;
  }

  var k = Math.floor(t);
  var m = [getTangent(k, tangentFactor, array), getTangent(k + 1, tangentFactor, array)];
  var p = [clipInput(k,array), clipInput(k + 1, array)];

  t -= k;

  var t2 = t * t;
  var t3 = t * t2;

  return (2 * t3 - 3 * t2 + 1) * p[0] + (t3 - 2 * t2 + t) * m[0] + ( -2 * t3 + 3 * t2) * p[1] + (t3 - t2) * m[1];
};

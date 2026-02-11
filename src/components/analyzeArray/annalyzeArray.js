export default function analyzeArray(arr) {
  return {
    average: avg(arr),
    min: min(arr),
    max: max(arr),
    length: arr.length,
  };
}

function avg(arr) {
  return (
    arr.reduce((accumulator, curr) => {
      return accumulator + curr;
    }, 0) / arr.length
  );
}

function max(arr) {
  return arr.reduce((accumulator, current) => Math.max(accumulator, current));
}

function min(arr) {
  return arr.reduce((accumulator, current) => Math.min(accumulator, current));
}

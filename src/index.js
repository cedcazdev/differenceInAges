function differenceInAges(ages) {
  // Your solution here!
  let max = 0;
  let min = 0;
  let diferencia = 0;

  let array_edades = [];

  min = Math.min(...ages);

  if (min < 1) {
    min = 0;
  }

  max = Math.max(...ages);

  diferencia = max - min;

  array_edades.push(min);
  array_edades.push(max);
  array_edades.push(diferencia);

  return array_edades;
}

export default differenceInAges;

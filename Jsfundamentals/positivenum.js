let arr3 = [1, 2, -3, 5, -9, -8, -7, 7];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] < 0) {
    continue;
  }
  console.log(arr3[i]);
}
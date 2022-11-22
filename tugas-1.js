let nums = 35713;

var countNum = function (nums) {
  const hashMap = {};
  let input = nums.toString();

  for (let i = 0; i < 10; i++) hashMap[i.toString()] = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "0") {
      hashMap[Number(input[i])]++;
    } else if (input[i] === "1") {
      hashMap[Number(input[i])]++;
    } else if (input[i] === "2") {
      hashMap[Number(input[i])]++;
    } else if (input[i] === "3") {
      hashMap[Number(input[i])]++;
    } else if (input[i] === "4") {
      hashMap[Number(input[i])]++;
    } else if (input[i] === "5") {
      hashMap[Number(input[i])]++;
    } else if (input[i] === "6") {
      hashMap[Number(input[i])]++;
    } else if (input[i] === "7") {
      hashMap[Number(input[i])]++;
    } else if (input[i] === "8") {
      hashMap[Number(input[i])]++;
    } else if (input[i] === "9") {
      hashMap[Number(input[i])]++;
    }
  }

  for (let i = 0; i < 10; i++) {
    console.log("the number", i, "appears", hashMap[i], "times");
  }
};

countNum(nums);

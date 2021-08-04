//Collatz conjecture bouncing number calculator

let flag = 1;
let bouncingTime = 0;
let testNumber = 200;
let max = 0;

while (flag) {
  if (testNumber % 2 === 0 && testNumber !== 1) {
    testNumber = testNumber / 2;
    max = testNumber > max ? testNumber : max;
    bouncingTime++;
    console.log(testNumber);
  } else if (testNumber % 2 !== 0 && testNumber !== 1) {
    testNumber = testNumber * 3 + 1;
    max = testNumber > max ? testNumber : max;
    bouncingTime++;
    console.log(testNumber);
  } else if (testNumber === 1) {
    flag = 0;
    console.log(
      `Limit Reached in ${bouncingTime} steps with maximum at ${max}`
    );
  }
}

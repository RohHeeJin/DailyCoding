// 문제 : 수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 한다.
// input : number 타입의 정수
// output : boolean 타입을 리턴해야한다.
// important : 반복문(while)문을 사용해야 한다.
//             2의 0승은 1이다.
//             Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.

function powerOfTwo(num) {
  // 조건 1. 2의 0승은 1이기때문에
  if (num === 1) {
    return true;
  }
  // 조건 2.
  if (num % 2) {
    return false;
  }

  let powered = 2;
  while (powered < num) {
    powered = powered * 2;
  }

  return powered === num;
}

let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false

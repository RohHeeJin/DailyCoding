//문제 : 연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

//input : number 타입의 연이율

//output : number 타입을 리턴해야 한다.

function computeWhenDouble(interestRate) {
  // 이자
  let rate = 1 + interestRate / 100;
  // 원금
  let principal = 1;
  let year = 0;
  while (principal < 2) {
    // 연이율을 고려한 새로운 원금
    principal = principal * rate;
    // +1년
    year++;
  }
  return year;
}

//while문을 활용하여 결과 값이 2가되면 종료되게 작성

let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8

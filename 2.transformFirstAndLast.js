// 문제 : 배열을 입력받아 차례대로 배열의 첫 요소와 마지막 요소를 키와 값으로 하는 객체를 리턴해야 합니다.

// input : string 타입을 요소로 갖는 배열

// output : 객체를 리턴해야 한다

// important : 빈 배열을 입력받은 경우, 빈 객체를 리턴해야 한다.
//             입력으로 받는 배열을 수정하지 않아야 한다.

function transformFirstAndLast(arr) {
  // 1. 빈 객체 선언
  // 2. 조건 생성 arr[0]은 key , arr[arr.length - 1]은 value
  let result = {};
  if (arr.length > 0) {
    // key : value;
    result[arr[0]] = arr[arr.length - 1];
  }
  return result;
}

let arr = ["Queen", "Elizabeth", "Of Hearts", "Beyonce"];
let output = transformFirstAndLast(arr);
console.log(output); // --> { Queen : 'Beyonce' }

arr = ["Kevin", "Bacon", "Love", "Hart", "Costner", "Spacey"];
output = transformFirstAndLast(arr);
console.log(output); // --> { Kevin : 'Spacey' }

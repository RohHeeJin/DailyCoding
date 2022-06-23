// 문제 : 선물상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴해야한다.

// input : 문자열,배열을 요소로 갖는 재귀적으로 정의된 배열
//         문자열은 선물 상자에 들어있는 각 선물의 이름을 의미한다.
//         배열은 더 작은 선물 상자를 의미한다.

// output : boolean 타입을 리턴

// important : 재귀함수의 형태를 사용
//             빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴해야한다.

function unpackGiftbox(giftBox, wish) {
  // TODO: 여기에 코드를 작성합니다.
  // boolean 타입을 리턴받는다.

  // recursive case
  for (let i = 0; i < giftBox.length; i++) {
    // giftBox가 wish와 같다면
    if (giftBox[i] === wish) {
      return true;
    }
    // giftBox 요소중에 배열이며 wish와 같다면
    else if (Array.isArray(giftBox[i])) {
      const result = unpackGiftbox(giftBox[i], wish);
      if (result === true) {
        return true;
      }
    }
  }
  // base case
  // 빈 배열 또는 빈 문자열을 입력받은 경우, false를 리턴받는다.
  return false;
}

const giftBox = ["macbook", "mugcup", ["eyephone", "postcard"], "money"];

let output = unpackGiftbox(giftBox, "iphone");
console.log(output); // --> false

output = unpackGiftbox(giftBox, "postcard");
console.log(output); // --> true

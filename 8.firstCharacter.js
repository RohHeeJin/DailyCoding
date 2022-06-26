//문제 : 문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자로 이루어진 문자열을 리턴해야 합니다.
//input : string 타입의 공백이 있는 알파벳 문자열
//output : string 타입을 리턴해야 합니다.

function firstCharacter(str) {
  //str이 빈문자열 일 때 빈 문자열을 리턴
  if (str === "") {
    return "";
  }
  // 문자열을 공백을 중심으로 나눠준다.
  let words = str.split(" ");
  let firstOnly = "";
  // 나눠준 단어를 반복문으로 순회한다.
  for (let i = 0; i < words.length; i++) {
    // 각 단어의 첫글자만을 뽑는다.
    firstOnly = firstOnly + words[i][0];
  }
  // 첫글자만으로 이루어진 문자열을 리턴
  return firstOnly;
}

let output = firstCharacter("hello world");
console.log(output); // --> "hw"

output = firstCharacter(
  "The community at Code States might be the biggest asset"
);
console.log(output); // --> "TcaCSmbtba"

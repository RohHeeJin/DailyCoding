// 문제 : 2이상의 자연수를 입력받아 2부터 해당 수까지의 소수(prime number)들을 리턴해야 한다.
// input : number타입의 정수 ( num >= 2 )
// output : string 타입을 리턴
//        : 2-3-5-7 형식으로 리턴
// important : 이중반복문 사용할것

function listPrimes(num) {
  let result = "2"; //2는 무조건 소수기에 맨 앞에 붙이기
  for (let i = 3; i <= num; i = i + 2) {
    //1과 2 제외하기 위해 3 & 짝수는 무조건 소수가 아니니 홀수만나오도록 +2
    let isPrime = true; //소수와 낫소수나누기
    let sqrt = parseInt(Math.sqrt(i)); //제곱근 정수로 바꾸기
    for (let j = 3; j <= sqrt; j = j + 2) {
      //1과 2 제외하고 3 / 제곱근보다 적게  (왜 j+2인지 모르겠음)
      if (i % j === 0) {
        isPrime = false;
        break; //i가 j로 나눠지는 순간 false로 변하면서 브레이크 먹고 다시 i+=2 반복
      }
    }

    if (isPrime) {
      //isPrime이 트루면 (i%j !== 0)결과에 더하기
      result = `${result}-${i}`;
    }
  }

  return result;
}

let output = listPrimes(2);
console.log(output); // --> '2'

output = listPrimes(6);
console.log(output); // --> '2-3-5'

output = listPrimes(18);
console.log(output); // --> '2-3-5-7-11-13-17'

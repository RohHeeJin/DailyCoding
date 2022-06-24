//문제 : 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴해야 합니다.

//input : 양의 정수 또는 배열을 요소로 갖는 다차원 배열

//output : 배열을 리턴해야 한다.

//important : 함수 flattenArr는 재귀함수의 형태로 작성합니다.
//             Array Method flat()과 flatMap() 사용은 금지됩니다.
//             입력받은 배열은 함수의 호출 뒤에도 처음 상태를 유지해야 합니다(immutability).
//             입력으로 전달되는 다차원 배열이 중첩된 정도(중첩의 깊이)는 정해져 있지 않습니다.
//             빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.

function flattenArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
    // 반복문 사용 가능
    
    for(let i = 0; i<arr.length; i++){
      // 요소중에 배열이 있으면? -> 배열 풀어주기
      if(Array.isArray(arr[i])){
        // 요소중에 배열을 중심으로 앞 뒤로 나눠주기
        let front = arr.slice(0, i)
        let middle = arr[i]
        let back = arr.slice(i+1)
        // 나눠준 요소를 다시 합쳐준다
        let flatten = [...front, ...middle, ...back]
        return flattenArr(flatten)
      }
    }
    return arr
  }

let output = flattenArr([[1], 2, [3, 4], 5]);
console.log(output); // --> [1, 2, 3, 4, 5]

output = flattenArr([[2, [[3]]], 4, [[[5]]]);
console.log(output); // --> [2, 3, 4, 5]
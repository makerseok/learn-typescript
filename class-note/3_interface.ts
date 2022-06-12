interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
  age: 33,
  name: '세호',
};

// 함수에 인터페이스 활용
const getUser = (user: User) => {
  console.log(user);
};

const capt = {
  age: 123,
  name: '캡틴',
};

getUser(capt);

// 함수의 스펙에 인터페이스 활용
interface AddFunction {
  (a: number, b: number): number;
}

let add: AddFunction;
add = function (a, b) {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let developer: Developer = {
  language: 'ts',
  age: 123,
  name: '덕배',
};

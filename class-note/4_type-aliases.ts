interface PersonI {
  name: string;
  age: number;
}

type PersonT = {
  name: string;
  age: number;
};

let person01: PersonI = {
  name: '조세호',
  age: 130,
};

let person02: PersonT = {
  name: '조세호',
  age: 130,
};

type MyString = string;
const str: MyString = 'hello';

type Todo = {
  id: string;
  title: string;
  done: boolean;
};
function getTodo(todo: Todo) {}

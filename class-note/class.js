const { sum } = require('./function');
function PersonF(name, age) {
  this.name = name;
  this.age = age;
}

let 함수로만든사람 = new PersonF('함수', 7);

class Person {
  constructor(name, age) {
    console.log('생성되었습니다~');
    this.name = name;
    this.age = age;
  }
}

let 덕팔 = new Person('덕팔', 68);
console.log(덕팔);
console.log(함수로만든사람);
console.log(sum(1, 2));

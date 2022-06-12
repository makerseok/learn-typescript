const logMessage = (value: any) => {
  console.log(value);
};

logMessage('hello');
logMessage(100);

const logMessage2 = (value: string | number) => {
  if (typeof value === 'number') {
    value.toLocaleString();
  } else if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
};

logMessage2('hello');
logMessage2(100);
// logMessage2(false);

interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}

const askSomeone = (someone: Developer | Person) => {
  someone.name;
  // someone.age;
  // someone.skill;
};

let p1: string | number | boolean;
let p2: string & number & boolean;

const askSomeone2 = (someone: Developer & Person) => {
  someone.name;
  someone.age;
  someone.skill;
};

askSomeone({ name: 'zz', skill: 'asdf' });
askSomeone({ name: 'zz', age: 123 });
askSomeone2({ name: 'zz', skill: 'asdf', age: 1234 });
// askSomeone2({ name: 'zz', age: 123 });

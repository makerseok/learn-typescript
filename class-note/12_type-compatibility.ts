interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//   name: string;
// }

class Person {
  name: string;
}

let dev: Developer = {
  name: 'asdf',
  skill: 'asdf',
};
let per: Person;

// dev = per;
per = dev;

let add = (a: number): Person => {
  // ...
  return { name: 'asdf' };
};

let sum = (a: number, b: number) => {
  // ...
};

// add = sum;
sum = add;

interface Empty<T> {
  //...
}
let empty1: Empty<string> = {};
let empty2: Empty<number> = {};
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;

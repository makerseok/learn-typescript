let a = 'abc';

function getB(b = 10) {
  let c = 'hi';
  return b + c;
}

interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T, U> extends Dropdown<U> {
  description: string;
  tag: T;
}

let detailedItem: DetailedDropdown<string, number> = {
  value: 123,
  tag: 'asdf',
  title: 'hello',
  description: 'desc',
};

let arr = [1, 2, true, 'a'];

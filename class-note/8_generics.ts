// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('ㅋㅋ');
// logText({ 별게: '다 되네' });

// function logText2<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText2<number>(10);
// logText2<string>('ㅋㅋ');
// logText2({ 별게: '다 되네' });

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('adsf');
str.replace('a', 'A');

// 인터페이스에 제네릭
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<number> = { value: 10, selected: false };

// 타입 제한
function logTextLength<T>(text: T): T {
  // console.log(text.length);
  return text;
}

logTextLength('hi');

// 타입 제한 2
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

// 타입 제한 3
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption('name');
// getShoppingItemOption('asdf');

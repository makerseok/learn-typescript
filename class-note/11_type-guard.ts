interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'asdf', age: 33, skill: 'qewr' };
}

var asdf = introduce();
// console.log(asdf.skill);

if ((asdf as Developer).skill) {
  console.log((asdf as Developer).skill);
}

function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}
if (isDeveloper(asdf)) {
  console.log(asdf.skill);
} else {
  asdf.age;
}

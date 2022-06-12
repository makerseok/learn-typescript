enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes);

// 예제
enum Answer {
  Yes = 'Y',
  NO = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답입니다~');
  } else if (answer === Answer.NO) {
    console.log('오답입니다;');
  }
}

// askQuestion('yes');
askQuestion(Answer.Yes);

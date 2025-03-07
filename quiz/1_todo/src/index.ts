type TodoType = { id: number; title: string; done: boolean };
type TodoItemsType = TodoType[];
let todoItems: TodoItemsType;

// api
function fetchTodoItems(): TodoItemsType {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos(): TodoItemsType {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: TodoType): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: TodoType): void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): TodoType {
  return todoItems[0];
}

function showCompleted(): TodoItemsType {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(todo1: TodoType, todo2: TodoType): void {
  addTodo(todo1);
  addTodo(todo2);
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

const item1 = {
  id: 4,
  title: '아이템 4',
  done: false,
};
const item2 = {
  id: 5,
  title: '아이템 5',
  done: true,
};

todoItems = fetchTodoItems();
addTwoTodoItems(item1, item2);
log();

const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// localStorage 에 저장하기 위해 li가 생성 될때마다 배열에 삽입
// localStorage 에는 배열 저장 안됨. 텍스트만 가능

const TODOS_KEY = "todos";

let toDos = [];
// toDos에 받아온 배열을 문자열로 변환해 localStrage에 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 버튼을 클릭하면 클릭한 요소의 부모요소 li를 제거
// parentElement 부모요소 
function deleteTodo(event){
  // 클릭한 요소의 부모요소
  const li = event.target.parentElement;
  li.remove();
}


// 투두리스트를 화면에 보여주는 코드
function paintToDo(newTodo) {
  // li요소 생성하는 변수
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;

  const button = document.createElement("button");

  button.addEventListener('click', deleteTodo);
  button.innerText = "❌"

  //input에 입력한 값을 span에 넣기
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

// input에 값을 입력했을 때 실행되는 함수
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  toDos.push(newTodo);
  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


// localStorage에 저장되어있는 "toDos" 의 값을 가져옴
const savedToDos = localStorage.getItem(TODOS_KEY);

// localStorage에 저장되어있는 "toDos" 의 값이 있으면 실행
// localStorage에 저장되어있는 "toDos" 의 값을 forEach로 parsedToDos배열에 있는 수 만큼 paintToDo함수를 실행 
if(savedToDos) {
  // JSON.sringify() 로 string으로 되어있는 값을 array로 다시 변환(forEach문을 쓰기 위함)
  const parsedToDos = JSON.parse(savedToDos);
  parsedToDos.forEach(paintToDo);
  toDos = parsedToDos;
}


// 새로고침하고 투두리스트를 작성하면 원래 있던 배열에 값이 덮어 씌워짐
// 원인은 const toDos = []; 에 배열이 비어있는 상태로 실행되기 때문
// 오직 새로 입력한 newTodo의 값만 toDos배열에 들어가기 때문에 이전에 있는 localStorage는 덮어짐
// 해결 방법은 const toDos = []; 를 let toDos = [];로 변경하고
//  localStorage에 저장되어있는 "toDos" 의 값이 있으면  toDos = parsedToDos (로컬에 들어있는 값)를 넣어주면 됨 
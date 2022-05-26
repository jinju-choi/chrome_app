const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// localStorage 에 저장하기 위해 li가 생성 될때마다 배열에 삽입
// localStorage 에는 배열 저장 안됨. 텍스트만 가능
const toDos = [];


function saveToDos() {
  localStorage.setItem("todos", toDos)
}

// parentElement 부모요소 
function deleteTodo(event){
  // 클릭한 요소의 부모요소
  const li = event.target.parentElement;
  li.remove();
}

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

function handleToDoSubmit(event) {
  event.preventDefault();

  // 인풋 갑을 먼저 변수에 복사
  const newTodo = toDoInput.value;
  // 엔터를 누르면 빈값을 넣기
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
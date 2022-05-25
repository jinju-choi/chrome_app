const loginform = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');
// 로그인

// 유효성 검사 (비어 있으면 안됨, 글자수 체크 15글자) 를 자바스크립트에서 할 수 있지만 최대한 html을 이요하는게 좋다 
// html 에서 input의 유효성 검사를 위해서는 form 요소 안에 있어야함
// form 안에서 input 버튼 타입이 submit이면 자동으로 입력된 값을 전송함
// 새로고침 되는것 막기(브라우저 자체에서 submit을 하면 새로고침 되도록 되어있다) -> submit 이벤트

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 이름을 입력하면 입력창 사라지고 유저가 입력한 텍스트가 보임
function onLoginSubmit(event){
  event.preventDefault();
  const userName = loginInput.value;

  loginform.classList.add(HIDDEN_CLASSNAME);
  console.log(userName);

  localStorage.setItem(USERNAME_KEY, userName);
  printGreeting(userName);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

function printGreeting (username){
  greeting.innerHTML = `Hello ${username}!`
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(saveUsername === null) {
  loginform.classList.remove(HIDDEN_CLASSNAME);
  loginform.addEventListener("submit", onLoginSubmit);
} else {
  printGreeting(saveUsername);
}

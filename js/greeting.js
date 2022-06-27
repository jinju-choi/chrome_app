const loginform = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector('#login-form button');
const greeting = document.querySelector('#greeting');
// 로그인

// form 안에서 input 버튼 타입이 submit이면 자동으로 입력된 값을 전송함
// 새로고침 되는것 막기(브라우저 자체에서 submit을 하면 새로고침 되도록 되어있다) -> submit 이벤트

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 이름을 입력하면 입력창 사라지고 유저가 입력한 텍스트가 보임
function onLoginSubmit(event){
  event.preventDefault();
  const userName = loginInput.value;
  loginform.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  paintingGreetings(userName);
}

// 입력한 유저이름 보이게 하는 함수
const saveUsername = localStorage.getItem(USERNAME_KEY);

function paintingGreetings (username){
  greeting.innerText = `${username}님, 안녕하세요 :)`
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 저장된 유저 이름이 없으면 입력란 보이게 & 입력한 정보를 저장해서 새로고침해도 보여짐
if(saveUsername === null) {
  loginform.classList.remove(HIDDEN_CLASSNAME);
  loginform.addEventListener("submit",onLoginSubmit);
} else {
  paintingGreetings(saveUsername);
}


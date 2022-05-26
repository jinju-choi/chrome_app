// setInterval =>일정 시간 마다 실행하는 함수
// setTimeout => 일정 시간 후에 실행하는 함수
// 숫자가 한자리면 앞에 0 이 붙게 하기 
// .padStart(문자열 길이, 문자열 앞에 들어갈 문자) => 문자열 길이가 짧으면 문자열 길이만큼 들어갈 문자를 채움
// .padEnd(문자열 길이, 문자열 뒤에 들어갈 문자)

const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minuite = String(date.getMinutes()).padStart(2,"0");
  const seconds = String(date.getSeconds()).padStart(2,"0");
  clock.innerText = `${hours}: ${minuite}: ${seconds}`;
}

// web이 load되자 마나 getClock()을 실행하고 매초마다 실행되게
getClock();
setInterval(getClock , 1000);




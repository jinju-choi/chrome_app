// navigator.geolocation.getCurrentPosition() : 브라우저에서 위치좌표를 줌
// getCurrentPosition 두개의 argument가 필요. 한개는 정상실행 될때 실행할 함수, 에러발생했을 때 실행될 함수
// 위도 경도 숫자를 위치로 바꿔주는 서비스 api를 이용

const API_KEY = "014865f5d58bc56a54fc6ec378a54853";

// 정상실행 될때 실행할 함수
function onGeoOk(positon) {
  console.log(positon);
  // 위도
  const lat = positon.coords.latitude;
  // 경도
  const lon = positon.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  let weatherIcon = {
    '01' : 'fa-solid fa-sun',
    '02' : 'fa-solid fa-cloud-sun',
    '03' : 'fa-solid fa-cloud',
    '04' : 'fa-solid fa-cloud-meatball',
    '09' : 'fa-solid fa-cloud-sun-rain',
    '10' : 'fa-solid fa-cloud-showers-heavy',
    '11' : 'fa-solid fa-poo-storm',
    '13' : 'fa-solid fa-snowflake',
    '50' : 'fa-solid fa-smog'
  };

  // 자바스크립트가 url을 부름
  // 서버의 응답을 기다려야함
  //response.json() url 안에 있는 데이터들
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
    const weather = document.querySelector("#weather .temp");
    const city = document.querySelector("#weather .city");
    const icon = document.querySelector("#weather .icon");
    const iconCon = data.weather[0].icon;
    // const iconimg = icon.querySelector("img")
    const iconAdrs = `http://openweathermap.org/img/wn/${iconCon}@2x.png`;

    const iconimg = document.createElement("i");
    icon.append(iconimg);

    iconimg.setAttribute('class',weatherIcon[(iconCon).substr(0,2)]);

    // icon.append("<span class='" + weatherIcon[(iconCon).substr(0,2)] +"'></span>");
    // iconimg.setAttribute('src',iconAdrs);

    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${Math.floor(data.main.temp)}℃`;
  });



}

// 에러발생했을 때 실행될 함수
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
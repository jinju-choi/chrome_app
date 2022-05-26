const quotes = [
    {
        quote: "항상 너의 양심이 시키는대로 해!",
        autior: "피노키오",
    },
    {
        quote: "넌 이 세상 어떤 것보다 의미 있어 나한텐!",
        autior: "-피터팬",
    },
    {
        quote: "오늘 특별한 순간들은 내일의 추억이에요.",
        autior: "-알라딘",
    },
    {
        quote: "삶은 풀어야 할 문제가 아니고 경험해야하는 여행이란다.",
        autior: "-곰돌이 푸",
    },
    {
        quote: "포기한다면 넌 바보일 뿐이야.",
        autior: "-알라딘",
    },
    {
        quote: "난 잠깐 넘어졌지만 다시 일어날거야.",
        autior: "-밤비",
    },
    {
        quote: "내 기분은 내가 정해, 오늘은 행복이야.",
        autior: "-이상한 나라의 앨리스",
    },
    {
        quote: "오늘이 너의 인생에서 최악의 날이어도 내일은 더 나아질거라는 걸 잘 알잖아.",
        autior: "-라이온 킹",
    },
    {
        quote: "난 더이상 숨지 않고, 오늘을 즐기며 최선을 다할거야.",
        autior: "-코코",
    },
    {
        quote: "누구든 무엇이든 될 수 있어!",
        autior: "-주토피아",
    },
]


// Math.random() 랜덤한 숫자를 내보냄
// Math.round() 반올림 
// Math.ceil()  1이상은 반올려버림
// Math.floor() 소수점 뒤로는 다 날려버림

const quote = document.querySelector('#quote span:first-child');
const autior = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;
autior.innerHTML = todaysQuote.autior;
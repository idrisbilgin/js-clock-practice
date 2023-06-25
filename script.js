let myName = prompt("İsminizi giriniz");

document.querySelector("#myName").innerHTML = myName;

const time = () => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dayNow = date.getDay();
  let day = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  minutes = ("0" + minutes).slice(-2);
  seconds = ("0" + seconds).slice(-2);
  document.querySelector("#myClock").innerHTML =
    `${hours}:${minutes}:${seconds}` + ` ${day[dayNow]}`;
};
setInterval(time, 1000);

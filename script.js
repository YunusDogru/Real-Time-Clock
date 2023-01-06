/* 
design : https://dribbble.com/shots/17964055-Dark-Clock
*/

const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");

const setDeg = () => {
  
  let seconds = new Date().getSeconds();
  let minutes = new Date().getMinutes();
  let hours = new Date().getHours();

  
  sec.style.transform = `translateX(-50%) rotate(${180 + (seconds * 6)}deg)`;
  min.style.transform = `translateX(-50%) rotate(${180 + (minutes * 6) + (seconds - (seconds % 10)) / 10}deg)`;
  hour.style.transform = `translateX(-50%) rotate(${180 + (hours * 30) + (minutes - (minutes % 2)) / 2}deg)`;
}

setDeg();
setInterval(setDeg, 1000);

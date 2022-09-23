const dayEl = document.querySelector("#day");
const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");

const premiere = "7 nov 2025 20:00:00";

function countdown() {
  const premiereDate = new Date(premiere);
  const currentDate = new Date();

  const base = Math.floor((premiereDate - currentDate) / 1000);

  const day = Math.floor(base / 3600 / 24);
  const hour = Math.floor(base / 3600) % 24;
  const minute = Math.floor(base / 60) % 60;
  const second = Math.floor(base % 60);

  dayEl.innerHTML = zeroLeft(day);
  hourEl.innerHTML = zeroLeft(hour);
  minuteEl.innerHTML = zeroLeft(minute);
  secondEl.innerHTML = zeroLeft(second);
}

function zeroLeft(time) {
  return time < 10 ? `0${time}` : time;
}

function zeroLeftOldSchool(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}

countdown();

setInterval(countdown, 1000);

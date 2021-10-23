"use strict";

const api = {
  key: "0451aa87fff6857fdd52aec3964df37d",
  baseurl: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector("#sbox");

searchBox.addEventListener("keypress", upwork);

function upwork(e) {
  if (e.keyCode == 13) {
    getWork(searchBox.value);
  }
}

function getWork(query) {
  fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayWiev);
}

function displayWiev(weather) {
  console.log(weather);

  const cName = document.querySelector(".count-name");
  cName.innerHTML = `${weather.name}, ${weather.sys.country}`;
  const temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(weather.main.temp)}°<span>C</span>`;
  const weat = document.querySelector(".weat");
  weat.innerHTML = `${weather.weather[0].main}`;
  const weatType = document.querySelector(".weat-type");
  weatType.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(
    weather.main.temp_max
  )}°C`;
  const date = document.querySelector(".date");
  let dt = new Date();
  let x = dt.getDate();
  let y = dt.getFullYear();
  let z = dt.getMonth();

  const mainBack=document.querySelector("main");
  `${weather.weather[0].main}`
if(`${weather.weather[0].main}`=='Clear'){
 mainBack.style.backgroundImage=`url(./img/clear.jpg)`;
}else if(`${weather.weather[0].main}`=='Rain'){
  mainBack.style.backgroundImage=`url(./img/rain.jpg)`; 
}else if(`${weather.weather[0].main}`=='Clouds'){
  mainBack.style.backgroundImage=`url(./img/cloud.jpg)`; 
}else if(`${weather.weather[0].main}`=='Fog'){
  mainBack.style.backgroundImage=`url(./img/fog.jpg)`; 
}else{
  mainBack.style.backgroundImage=`url(./clodd.jpg)`; 
}



  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  date.innerHTML = ` ${x} , ${months[z]} , ${y}`;


}

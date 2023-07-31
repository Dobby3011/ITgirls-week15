const cities = ["Москва", "Санкт-Петербург", "Токио", "Нью-Йорк", "Рио-де-Жанейро"];
let temperatures = [];

for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру воздуха в городе ${cities[i]}`);
    temperatures.push(Number(temperature));
}

let list = document.querySelector('.ol');
list.innerHTML = '';
for (let i = 0; i < cities.length; i++) {
    console.log(i + 1 + '.', cities[i] + ':' + temperatures[i] + '°C');
    list.innerHTML += `
    <li class="temp"> Температура в городе ${cities[i]}   :   ${temperatures[i]} °C
    </li> `;
}

const maximumTemp = document.querySelector('.max');
//let calculateMax = Math.max.apply(null, temperatures);
const calculateMax = Math.max(...temperatures);
maximumTemp.innerHTML = "Максимальная температура: " + calculateMax + ' °C';


const minimumTemp = document.querySelector('.min');
let calculateMin = Math.min(...temperatures);
minimumTemp.innerHTML = "Минимальная температура: " + calculateMin + ' °C';




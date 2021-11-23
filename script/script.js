const timeNow = document.getElementById("time_now");
const dateNow = document.getElementById("date_now");
const city = document.getElementById("city");
const currentTemp = document.getElementById("current_temp");
const moreInfo = document.getElementById("more_info");
const weatherHourly = document.getElementById("weather_hourly");
const weatherDays = document.getElementById("weather_days");

// Updating the Date and Time value
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

setInterval(() => {
    const time = new Date();
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hours12Format = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour > 12 ? "PM" : "AM";

    timeNow.innerHTML =
        hours12Format + ":" + minutes + " " + `<span id="am_pm">${ampm}</span>`;

    dateNow.innerHTML =
        days[day] + ", " + date + " " + months[month] + ", " + year;
}, 1000);

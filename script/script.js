const timeNow = document.getElementById("time_now");
const dateNow = document.getElementById("date_now");
const city = document.getElementById("city");
const currentTemp = document.getElementById("current_temp");
const currentDesc = document.getElementById("current_description");
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

const apiKey = "5a48df8de3b38c5cd67b386cc8d30bf9";
const apiKey2 = "eb40569be873eddca9a3ad817c1a07fb";
getWeatherData();

function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        let { latitude, longitude } = success.coords;
        fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=houtly,minutely&units=metric&appid=${apiKey}`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                showTempData(data);
            });
    });
}

function showTempData(data) {
    let {
        temp,
        feels_like,
        sunrise,
        sunset,
        humidity,
        pressure,
        wind_speed,
        visibility,
        weather,
    } = data.current;

    currentTemp.innerHTML = `                  
        <div class="temp_now">
            ${Math.ceil(temp)}<span>&deg C</span>
        </div>
        <div class="temp_feels">
            Feels like: ${Math.ceil(feels_like)}<span>&deg C</span>
        </div>`;
    currentDesc.innerHTML = `
        <div class="icon_now">
            <img src="http://openweathermap.org/img/wn/${weather[0].icon}@2x.png" alt="icon weather">
        </div>
        <div class="condition_now">
            ${weather[0].description}
        </div>`;

    moreInfo.innerHTML = `                
        <div class="weather_now_item">
            <div>Sunrise: </div>
            <div>${window.moment(sunrise * 1000).format("HH:mm A")}</div>
        </div>
        <div class="weather_now_item">
            <div>Sunset: </div>
            <div>${window.moment(sunset * 1000).format("HH:mm A")}</div>
        </div>
        <div class="weather_now_item">
            <div>Humidity: </div>
            <div>${humidity} <span>%</span></div>
        </div>
        <div class="weather_now_item">
            <div>Pressure: </div>
            <div>${pressure} <span>hPa</span></div>
        </div>
        <div class="weather_now_item">
            <div>Wind: </div>
            <div>${wind_speed} <span>m/s</span></div>
        </div>
        <div class="weather_now_item">
            <div>Visibility: </div>
            <div>${visibility} <span>m</span></div>
        </div>`;
}

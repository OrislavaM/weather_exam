// setInterval(() => {
//     const time = new Date();
//     const year = time.getFullYear();
//     const month = time.getMonth();
//     const date = time.getDate();
//     const day = time.getDay();
//     const hour = time.getHours();
//     const hours12Format = hour >= 13 ? hour % 12 : hour;
//     const minutes = time.getMinutes();
//     const ampm = hour > 12 ? "PM" : "AM";

//     timeNow.innerHTML =
//         hours12Format + ":" + minutes + " " + `<span id="am_pm">${ampm}</span>`;

//     dateNow.innerHTML =
//         days[day] + ", " + date + " " + months[month] + ", " + year;
// }, 1000);

const weatherDays = document.getElementById("weather_days");

const apiKey = "5a48df8de3b38c5cd67b386cc8d30bf9";
// const apiKey2 = "eb40569be873eddca9a3ad817c1a07fb";
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
                showNextDayForecast(data);
            });
    });
}

function showNextDayForecast(data) {
    let nextDayForecast = "";
    data.daily.splice(5);
    console.log(data.daily);

    data.daily.forEach((day, idx) => {
        if (idx == 0) {
            nextDayForecast += `
            <div class="weather_forecast_item">
                <div class="forecast_day">
                    Today
                </div>
                <div class="forecast_date">
                    ${window.moment(day.dt * 1000).format("LL")}
                </div>
                <div class="forecast_sunrise">
                    Sunrise: ${window
                        .moment(day.sunrise * 1000)
                        .format("HH:mm A")}
                </div>
                <div class="forecast_sunset"> 
                    Sunset: ${window
                        .moment(day.sunset * 1000)
                        .format("HH:mm A")}
                </div>
                <div class="forecast_icon">
                    <img src="http://openweathermap.org/img/wn/${
                        day.weather[0].icon
                    }@2x.png" alt="hourly_icon">
                </div>
                <div class="forecast_temp_min">
                    Min: ${Math.ceil(day.temp.min)}<span>&deg C</span>
                </div>
                <div class="forecast_temp_max">
                    Max: ${Math.ceil(day.temp.max)}<span>&deg C</span>
                </div>
                <div class="forecast_description">
                    ${day.weather[0].description}
                </div>
            </div>`;
        } else {
            nextDayForecast += `
        <div class="weather_forecast_item">
            <div class="forecast_day">
                ${window.moment(day.dt * 1000).format("dddd")}
            </div>
            <div class="forecast_date">
                ${window.moment(day.dt * 1000).format("LL")}
            </div>
            <div class="forecast_sunrise">
                Sunrise: ${window.moment(day.sunrise * 1000).format("HH:mm A")}
            </div>
            <div class="forecast_sunset"> 
                Sunset: ${window.moment(day.sunset * 1000).format("HH:mm A")}
            </div>
            <div class="forecast_icon">
                <img src="http://openweathermap.org/img/wn/${
                    day.weather[0].icon
                }@2x.png" alt="hourly_icon">
            </div>
            <div class="forecast_temp_min">
                Min: ${Math.ceil(day.temp.min)}<span>&deg C</span>
            </div>
            <div class="forecast_temp_max">
                Max: ${Math.ceil(day.temp.max)}<span>&deg C</span>
            </div>
            <div class="forecast_description">
                ${day.weather[0].description}
            </div>
        </div>`;
        }
    });
    weatherDays.innerHTML = nextDayForecast;
}

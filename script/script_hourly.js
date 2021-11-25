// const apiKey = "5a48df8de3b38c5cd67b386cc8d30bf9";
// const apiKey2 = "eb40569be873eddca9a3ad817c1a07fb";
// getWeatherData();

// function getWeatherData() {
//     navigator.geolocation.getCurrentPosition((success) => {
//         let { latitude, longitude } = success.coords;
//         fetch(
//             `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=houtly,minutely&units=metric&appid=${apiKey}`
//         )
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 showTempData(data);
//             });
//     });
// }

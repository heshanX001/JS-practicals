console.log('Developed By Heshan Kumarasingha | GitHub: heshanX001');

let inputCity = document.getElementById('inputCity');
let searchBtn = document.getElementById('search-button');

let weatherCondition = document.getElementById('condition');
let cityName = document.getElementById('city');
let country = document.getElementById('country');
let tempValue = document.getElementById('temp-value');
let humidValue = document.getElementById('humid-value');
let windValue = document.getElementById('wind-value');
let showData = document.querySelector('.details');

const apiKey = '6c3764250b193fda70e0aeb4dfc34b3c';

searchBtn.addEventListener('click',()=>{
    try{
        let city = inputCity.value;
        if(city == ''){
            alert("Enter a City to Proceed");
        }
        fetchData(city);
    }catch(err){
        alert('OOPS! Something Went Wrong!');
        console.error(err.message);
    }
});

async function fetchData(city){
        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiKey);
        let data = await response.json();

        console.log(data); //to test if the data is fetching or not

        cityName.innerHTML = data.name;
        tempValue.innerHTML = Math.round(data.main.temp) + "℃";
        humidValue.innerHTML = data.main.humidity + "%";
        windValue.innerHTML = (data.wind.speed).toFixed(1) + ' km/h';
        country.innerHTML = "\"" + data.sys.country + "\"";

        let weather = data.weather[0].main;
        if(weather === "Clear"){
            weatherCondition.src = "./src/clear.png";
        }else if(weather === "Clouds"){
            weatherCondition.src = "./src/clouds.png";
        }else if(weather === "Drizzle"){
            weatherCondition.src = "./src/drizzle.png";
        }else if(weather === "Atmosphere"){
            weatherCondition.src = "./src/Atmosphere.png";
        }else if(weather === "Extreme"){
            weatherCondition.src = "./src/Extreme.png";
        }else if(weather === "Rain"){
            weatherCondition.src = "./src/rain.png";
        }else if(weather === "Snow"){
            weatherCondition.src = "./src/snow.png";
        }else if(weather === "Thunderstorm"){
            weatherCondition.src = "./src/storm.png";
        }

        showData.style.display = 'flex';
}
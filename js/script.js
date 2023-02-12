
const cityForm = document.querySelector('[data-js="change-location"]');

const cityNameContainer = document.querySelector('[data-js="city-name"]')
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]')
const cityTemperatureContainer = document.querySelector('[data-js="city-temperature"]')
const timeImg = document.querySelector('[data-js="time"]')
const timeIconContainer = document.querySelector('[data-js="time-icon"]')


const cityCard = document.querySelector('.card') 


cityForm.addEventListener('submit', async event =>{event.preventDefault()

    const inputValue = event.target.city.value;
    const [{Key, LocalizedName}]  = await getCityData(inputValue);

    const [{WeatherText, Temperature, IsDayTime, WeatherIcon}] = await getCityWeather(Key)

    const timeIcon = `<img src="./src/icons/${WeatherIcon}.svg"/>`

    console.log(WeatherIcon)
    if(cityCard.classList.contains('d-none')){
        cityCard.classList.remove('d-none')
    }

    if(IsDayTime){
        timeImg.src="./src/day.svg"
    }else{
        timeImg.src="./src/night.svg"
    }


    timeIconContainer.innerHTML = timeIcon
    cityNameContainer.textContent = LocalizedName
    cityWeatherContainer.textContent =WeatherText
    cityTemperatureContainer.textContent =Temperature.Metric.Value
    
    cityForm.reset();

});


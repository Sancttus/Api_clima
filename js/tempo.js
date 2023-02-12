const APIKEY = 'PK2WvkIsKFeHx01VNsnvk6cdxoW31XFT'

const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl = cityName =>
 `${baseUrl}locations/v1/cities/search?apikey=${APIKEY}&q=${cityName}`;

 const getWeatherUrl = cityKey =>  `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKEY}&language=pt-br`

const fetchData = async url =>{
    try{      
    const response = await fetch(url);  

     if(!response.ok){
        throw new Error('Não foi possível obter os dados');
     }

     return await response.json();
     
 }catch({name,message}){
        alert(`${name}: ${message}`)
    }
}


const getCityData = cityName => fetchData(getCityUrl(cityName));



const getCityWeather = cityKey =>{
  return fetchData(getWeatherUrl(cityKey));
}






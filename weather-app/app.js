const coord = [19.34, -99.15];
/* const lat = 19.34
const lon = -99.15 */
const API_KEY = 'ab7f24ff8bce043928f97a48198723f0';
// const API_KEY = 'ab7f24ff8bce043928f97a3f0';
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coord[0]}&lon=${coord[1]}&appid=${API_KEY}&units=metric`;

const locationName = document.querySelector('#location');
const icon = document.querySelector('#icon');
const currentTemp = document.querySelector('#current-temp');
const maxTemp = document.querySelector('#max-temp');
const minTemp = document.querySelector('#min-temp');

async function getWeather() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(response)
    // console.log(data.weather[0].icon)
    // const icon = document.createElement('img')
    locationName.textContent = data.name;
    icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    currentTemp.textContent = `${data.main.temp}°C`;
    maxTemp.textContent = `${data.main.temp_max}°C`;
    minTemp.textContent = `${data.main.temp_min}°C`;
  } catch(error) {
    if(error.status === 401){
      document.querySelector('body').textContent = 'No tines permiso de acceder aqui!';
    }
    console.log(error)
  }
}

getWeather()

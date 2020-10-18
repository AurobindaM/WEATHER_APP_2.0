const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage=document.querySelector('.card-top img')
const cardInfo=document.querySelector('.card');


const get_celcius = (kelvin) => {
    get_celcius = Math.round(kelvin - 273.15);
    return get_celcius;
}

const isDayTime = (icon) => {
    if (icon.includes('d')) { return true }
    else { return false }
}

updateWeatherApp = (city) => {
    // console.log(city);
    cityName.textContent = city.name;
    const imagename = city.weather[0].icon;
    const iconSrc = `http://openweathermap.org/img/wn/${imagename}@2x.png`
    cardBody.innerHTML = ` <div class="card-mid row">
    <div class="col-8 text-center temp">
      <span>${Math.round(city.main.temp - 273.15)}°C</span>
    </div>
    <div class="col-4 condition-temp">
      <p class="condition">${city.weather[0].description}</p>
      <p class="high" id="highid">${Math.round(city.main.temp_max - 273.15)}°C</p>
      <p class="low" id="lowid">${Math.round(city.main.temp_min - 273.15)}°C</p>

    </div>
  </div>
  <div class="card shadow mx-auto" id="icon-container">
    <img src="${iconSrc}" alt="" />
  </div>
  <div class="card-bottom px-4 py-3 row">
    <div class="col text-center">
      <p>${Math.round(city.main.feels_like - 273.15)}°C</p>
      <span>Feels Like </span>
    </div>
    <div class="col text-center">
      <p>${city.main.humidity}%</p>
      <span>Humidity</span>
    </div>
  </div>`;

    if (isDayTime(imagename)) {
        console.log('day');
        timeImage.setAttribute('src','img/day_image.svg');
        if(cityName.classList.contains('text-white')){
            cityName.classList.remove('text-white');
        }
        else
        {
            cityName.classList.add('text-black');
        }
    } else {
        console.log('night');
        timeImage.setAttribute('src','img/night_image.svg');
        if(cityName.classList.contains('text-black')){
            cityName.classList.remove('text-black');
        }
        else
        {
            cityName.classList.add('text-white');
        }
    }

    cardInfo.classList.remove('d-none');
}

//Add an event listenere to the form
searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const citySearched = cityValue.value.trim();
    console.log(citySearched);
    searchForm.reset();

    requestCity(citySearched)
        .then((data) => {
            updateWeatherApp(data);
        })
        .catch((error) => { console.log(error) })

})
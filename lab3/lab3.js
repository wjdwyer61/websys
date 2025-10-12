
const weatherUrl=`https://api.openweathermap.org/data/2.5/weather?lat=42.731667&lon=-73.6925&appid=d7f4c2d3c3b422d0f07ca812f9dba9d8&units=imperial`;
const catUrl=`https://api.thecatapi.com/v1/images/search`;


function fetchCat() {
    $.ajax({
        url: catUrl,
        method: 'GET',
        success: function (response) {
            const catpic=response[0].url;

            const cathtml=`<img id="catpic" src="${catpic}">`;
            
            $('#catzone').html(cathtml);
        }
    })
}

function fetchWeather() {
  $.ajax({


    url: weatherUrl,
    method: 'GET',
    success: function (response) {

      const temp = response.main.temp;
    if (temp < 0) {
        document.body.style.backgroundColor = '#636e9eff';
    } else if (temp < 32) {
        document.body.style.backgroundColor = '#8daddbff';
    } else if (temp < 50) {
        document.body.style.backgroundColor = '#acecc9ff';
    } else if (temp < 65) {
        document.body.style.backgroundColor = '#deecacff';
    } else if (temp < 90) {
        document.body.style.backgroundColor = '#e7d296ff';
    } else {
        document.body.style.backgroundColor = '#d68a8aff';
    }

    const weat=response.weather[0].main;
    let imgcode = '50d';
    if (weat=='Clear'){
        imgcode='01d'
    } else if (weat=='Rain' || weat=='Drizzle'){
        imgcode='09d'
    } else if (weat=='Snow') {
        imgcode="13d"
    } else if (weat=='Thunderstorm'){
        imgcode='11d'
    } else if (weat=='Clouds'){
        imgcode='04d'
    }

      const weathermain = `
        <div class="column">
            <img id="icon" src="https://openweathermap.org/img/wn/${imgcode}@4x.png">
            <p id="cond">${response.weather[0].main} - ${response.weather[0].description}</p>
        </div>
        <div class="column">
            <p id="temp"><strong>${response.main.temp}</strong> °F</p>
            <p id="fl" class="it">Feels like ${response.main.feels_like} °F</p>
            <p id="hum"><strong>Humidity:</strong> ${response.main.humidity}%</p>
            <p id="wind"><strong>Wind:</strong> ${response.wind.speed} mph</p>
            <p id="rise"><strong>Sunrise:</strong> ${new Date(response.sys.sunrise * 1000).toLocaleTimeString()}</p>
            <p id="set"><strong>Sunset:</strong> ${new Date(response.sys.sunset * 1000).toLocaleTimeString()}</p>
        </div>`;

      const lu = `<p id="lu" class="it">Last Updated ${new Date(response.dt * 1000).toLocaleTimeString()}</p>`

      $('#weathermain').html(weathermain);
      $('#lu').html(lu);
    }
  });
}

$(document).ready(function () {
    fetchCat();
    fetchWeather();
    $('#weatherbutt').on('click', fetchWeather);
    $('#catbutt').on('click',fetchCat);
});



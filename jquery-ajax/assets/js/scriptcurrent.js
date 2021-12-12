var inputs = $(`input`);
var myBtn = $('button');
myBtn.click(() => {
  if (inputs.val()) {
    $.ajax({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${inputs.val()}&appid=f32ba69de2d2edb80a179865c3ae09b8`,
      type: 'GET',

      success: (response) => {
        $(`span`).text(` for ${response.name}`)
        $(`table`).html(` 
  
  <tr>
  <td>Weather :</td>
  <td>${response.weather[0].main}</td>
  </tr>
  <tr>
  <td>Description :</td>
  <td><img  src = 'http://openweathermap.org/img/w/${response.weather[0].icon}.png ' >${response.weather[0].description}</td>
  </tr>
  <tr>
  <td>Temperature :</td>
  <td>${((response.main.temp) - 273.15).toFixed(2)} °C</td>
  </tr>
  <tr>
  <td>Pressure :</td>
  <td>${response.main.pressure} hpa</td>
  </tr>
  <tr>
  <td>Humidity :</td>
  <td>${response.main.humidity} %</td>
  </tr>
  <tr>
  <td>Min Temp :</td>
  <td>${((response.main.temp_min) - 273.15).toFixed(2)} °C</td>
  </tr>
  <tr>
  <td>Max Temp :</td>
  <td>${((response.main.temp_max) - 273.15).toFixed(2)} °C</td>
  </tr>
  <tr>
  <td>Wind Speed</td>
  <td>${response.wind.speed} m/s</td>
  </tr>
  <tr>
  <td>Wind direction :</td>
  <td>${response.wind.deg} °</td>
  </tr>`)
      }
    })
  }
  else{
    $(`span`).text(` `)
    $(`table`).html(` `)}
})

var inputs= $(`#site-search`);
var rownbr= $(`#number`)
var myBtn = $('button');
myBtn.click(()=>{
if((inputs.val()  ) && (rownbr.val())){
$.ajax({
    url:`https://api.openweathermap.org/data/2.5/forecast/daily?q=${inputs.val()}&cnt=${rownbr.val()}&appid=c10bb3bd22f90d636baa008b1529ee25`,
    type:'GET',
 
  success:(response)=>{
    console.log(response)
    $(`span`).text(` `);
    $(`table > tbody`).nextAll().remove();
    $(`span`).text(`for ${response.city.name}`);
    for (var i=0 ; i<rownbr.val();i++){
        console.log(i);
    $(`table tbody`).append(` 
    
    <tr>
      <td> <img  src = 'http://openweathermap.org/img/w/${response.list[i].weather[0].icon}.png ' ></td>
      <td>${response.list[i].weather[0].main}</td>
      <td>${response.list[i].weather[0].description}</td>
      <td>${((response.list[i].temp.morn)-273.15).toFixed(2)} °C</td>
      <td>${((response.list[i].temp.night)-273.15).toFixed(2)} °C</td>
      <td>${((response.list[i].temp.min)-273.15).toFixed(2)} °C</td>
      <td>${((response.list[i].temp.max)-273.15).toFixed(2)} °C</td>
      <td>${response.list[i].pressure} hpa</td>
      <td>${response.list[i].humidity} %</td>
      <td>${response.list[i].speed} m/s</td>
      <td>${response.list[i].deg} °</td>
    </tr>
    `)
    }
    
  }
})

}

})

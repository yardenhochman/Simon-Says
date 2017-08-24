function Weather(city,currentTemp,description,minTemp,maxTemp){
  this.city = city;
  this.currentTemp=currentTemp;
  this.description = description;
  this.minTemp = minTemp;
  this.maxTemp = maxTemp;
}



/*

$(document).ready(function () {
    'use strict'
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=10025,us?units=us&appid=cfb5120b7582bdaa353c4a25835e21cd',
    type: 'GET'
  })

    .done((data)=> {
    let tempColor = (temp)=>{
      if (temp < 40) {
      $('.currentTemp').attr('style','color:blue')
      }
      if(temp > 90){
      $('.currentTemp').attr('style','color:red')
      }
      else{
      $('.currentTemp').attr('style','color:black')
      }
    }
    let setTemp = (data)=>{
      let currentTemp = Math.floor(data.main.temp*(9/5) - 459.67);
      let minTemp = Math.floor(data.main.temp_min*(9/5) - 459.67);
      let maxTemp= Math.floor(data.main.temp_max*(9/5) - 459.67)
      let weather = data.weather[0].main;
      $('.city').text(data.name);
      $('.currentTemp').text(currentTemp);
      $('.weather').text(weather);
      $('.minTemp').text(minTemp);
      $('.maxTemp').text(maxTemp);
      tempColor(currentTemp);
    }
    setTemp(data);
    let $zipcode = $('#zipcode');

    $('.submit').click(getWeather);

    function getWeather(data){
      $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?q='+$zipcode.val()+',us?units=us&appid=cfb5120b7582bdaa353c4a25835e21cd',
      type: 'GET',
      }).done((data)=> {
        setTemp(data);
      });
    };
  })
});*/
let $submit = $('.submit');
let zipcode = $('#zipcode');




const getWeather = (event) => {
  event.preventDefault();
  console.log('insde getWeather');
	$.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${zipcode.val()},us&units=imperial&appid=cfb5120b7582bdaa353c4a25835e21cd`,
      type: 'GET'
  })
	  .done( (data) => {
	  	console.log('I made it');
	  	weatherInfo(data);
	  })
	  .fail( (data) => {
	  	console.log('whatsupppp');
	  	debugger
	  })
}

const weatherInfo = (data) => { //assigns values to variables and html elements
		let localWeather = new Weather(data.name,data.main.temp,data.weather[0].description,
                                    data.main.temp_min,data.main.temp_max);
    $('.city').text(localWeather.city);
    $('.currentTemp').text(localWeather.currentTemp);
    $('.description').text(localWeather.description);
    $('.minTemp').text(localWeather.minTemp);    
    $('.maxTemp').text(localWeather.maxTemp);
    colorByWeather(localWeather);
}
const colorByWeather = (localWeather) => {
  
  if (localWeather<40){
    $('.result').css('color','blue');
    return
  }
  $('.result').css('color','red');
}

$submit.click(getWeather);

/*  .always(function( xhr, status ) {
    alert( "The request is complete!" );
  });*/








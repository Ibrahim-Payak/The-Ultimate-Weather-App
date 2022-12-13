const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '03d604e61fmshb1045d5b288ff4dp12a068jsn074d573196c7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};



//function

const getWeather = (city) => {
    cityName.innerHTML = city;
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
        console.log(response)
        // need to apply all values in html, all should be used once
        
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
    e.preventDefault(); //to prevent from reload
    getWeather(city.value);
})

getWeather("Delhi"); //by default


//weather for kolkata

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
// 	.then(response => response.json()) //converted to object
// 	.then((response) => {
//         console.log(response)
        
//     })
// 	.catch(err => console.error(err));
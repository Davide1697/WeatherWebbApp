const apiKey = '6527f2dfd2b956bf1b8021a100ca91bb';


cerca.addEventListener('click', async a => {
    a.preventDefault();
    let city = document.getElementById("location").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    try{
        const result = await fetch(url)
        .then(function(response){
        
        return response.json()
        
       })
       .then(function(response){
        let data = response;
        console.log(data)
        const place = data.name;
        const area = data.sys.country;
        const temp = data.main.temp-273.15;
        const windSpeed = data.wind.speed;
        const cielo = data.weather[0].description;
        const humidity = data.main.humidity;
        const error = data.message;
        console.log('errore', error);

        console.log('la temperatura e ',temp);

        document.getElementById('località').innerText = `Weather in ${place}, ${area}`;
        document.getElementById('temperatura').innerText = `${temp.toFixed(1)} °C`;
        document.getElementById('cielo').innerText = cielo.charAt(0).toUpperCase() + cielo.slice(1);
        document.getElementById('umidità').innerText = `Humidity: ${humidity}% `;
        document.getElementById('velocità-vento').innerText = `Wind Speed: ${windSpeed} km/hr`;

    })
    //document.getElementById('errore').classList.remove('mostra-errore');
    document.getElementById('info').classList.remove('nascondi');
    document.querySelector('.weather-info').classList.remove('loading');
    document.getElementById('inizio').classList.add('finish');
        
    }
    catch{
        document.getElementById('info').classList.add('nascondi');
        document.getElementById('inizio').classList.remove('finish');
        alert('Check what you typed and try again :( ')
        //document.getElementById('errore').classList.add('mostra-errore');
        
    }
    
    
})
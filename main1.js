const apiKey = '6527f2dfd2b956bf1b8021a100ca91bb';


cerca.addEventListener('click', async a => {
    a.preventDefault();
    let city = document.getElementById("location").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

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

        document.getElementById('località').innerText = `Weather in ${place}, ${area}`;
        document.getElementById('temperatura').innerText = `${temp.toFixed(1)} °C`;
        document.getElementById('cielo').innerText = cielo.charAt(0).toUpperCase() + cielo.slice(1);
        document.getElementById('umidità').innerText = `Humidity: ${humidity}% `;
        document.getElementById('velocità-vento').innerText = `Wind Speed: ${windSpeed} km/hr`;

    })
    

    //primo tentativo catch, non nasconde dati precedenti
    .catch(error => 
        document.getElementById('errore').innerText = `The name of the city is wrong. Check what you wrote`);
    
    // seconto tentativo catch, nasconde dati precedenti, ma non mostra i nuovi    
    /*.catch(function(){   
        document.getElementById('errore').classList.add('mostra-errore');
        document.getElementById('inizio').classList.add('finish');
        document.getElementById('errore').innerText = `Check what you typed and try again`;
        document.getElementById('info').classList.add('nascondi');
    })*/
     
    //Logica per lo stile, mostra il div weatherinfo solo quando premo tasto, applica classe per rimuovere ombra
    //document.getElementById('errore').classList.remove('mostra-errore');
    document.querySelector('.weather-info').classList.remove('loading');
    document.getElementById('inizio').classList.add('finish');
    
    })
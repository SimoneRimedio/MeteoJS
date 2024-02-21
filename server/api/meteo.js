/*const { fetchWeatherApi } = require('openmeteo');

const params = {
    "latitude": 52.52,
    "longitude": 13.41,
    "hourly": "temperature_2m",
    "timezone": "Europe/Berlin"
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = async(req,res) =>{ await fetchWeatherApi(url, params)};

// Funzione ausiliaria per formare intervalli di tempo
const range = (start, stop, step) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Processa la prima posizione. Aggiungi un ciclo for per più posizioni o modelli meteorologici
const response = responses[0];

// Attributi per fuso orario e posizione
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const hourly = response.hourly();

// Nota: L'ordine delle variabili meteorologiche nella query URL e gli indici sotto devono corrispondere!
const weatherData = {
    hourly: {
        time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
            (t) => new Date((t + utcOffsetSeconds) * 1000)
        ),
        temperature2m: hourly.variables(0).valuesArray(),
    },
};

// `weatherData` ora contiene una struttura semplice con array per data e dati meteorologici
for (let i = 0; i < weatherData.hourly.time.length; i++) {
    console.log(
        weatherData.hourly.time[i].toISOString(),
        weatherData.hourly.temperature2m[i]
    );
}

module.exports = weatherData;*/
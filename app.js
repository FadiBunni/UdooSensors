let barometer = require('neo-barometer');

var temperatureData;
var pressureData;
var altitudeData;

setInterval(function(){
    console.log('tempratur: ' + temperatureData + ' Kelvin');
    console.log('tryk: ' + pressureData + ' Pascal');
    console.log('højde: ' + altitudeData + ' Meter');
},1000);

// 1. Just temperature
let temperature = new barometer.Temperature();
temperature.on('data', function(data){
    temperatureData = data-273;
});
//temperature.on('error', console.error.bind(console));

// 2. Just pressure
let pressure = new barometer.Pressure();
pressure.on('data', function(data){
    pressureData = data;
});
//pressure.on('error', console.error.bind(console));

// 3. Just altitude
let altitude = new barometer.Altitude();
altitude.on('data', function(data){
    altitudeData = data;
});
//altitude.on('error', console.error.bind(console));

// 4. Compound (all values)
// let compound = new barometer.Compound();
// compound.on('data', console.log.bind(console));
//compound.on('error', console.error.bind(console));
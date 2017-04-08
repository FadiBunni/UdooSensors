let barometer = require('neo-barometer');

// 1. Just temperature
let temperature = new barometer.Temperature();
temperature.on('data', function(data){
    console.log('tempratur: ' + (data-273) + 'Kelvin');
});
//temperature.on('error', console.error.bind(console));

// 2. Just pressure
let pressure = new barometer.Pressure();
pressure.on('data', function(data){
    console.log('tryk: ' + data + 'Pascal')
});
//pressure.on('error', console.error.bind(console));

// 3. Just altitude
let altitude = new barometer.Altitude();
altitude.on('data', function(data){
    console.log('højde' + data)
});
//altitude.on('error', console.error.bind(console));

// 4. Compound (all values)
// let compound = new barometer.Compound();
// compound.on('data', console.log.bind(console));
//compound.on('error', console.error.bind(console));
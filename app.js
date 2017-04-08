let barometer = require('neo-barometer');

// 1. Just temperature
let temperature = new barometer.Temperature();
temperature.on('data', function(data){
    console.log('tempratur' + data);
});
//temperature.on('error', console.error.bind(console));

// 2. Just pressure
// let pressure = new barometer.Pressure();
// pressure.on('data', console.log.bind(console));
//pressure.on('error', console.error.bind(console));

// 3. Just altitude
// let altitude = new barometer.Altitude();
// altitude.on('data', console.log.bind(console));
//altitude.on('error', console.error.bind(console));

// 4. Compound (all values)
// let compound = new barometer.Compound();
// compound.on('data', console.log.bind(console));
//compound.on('error', console.error.bind(console));
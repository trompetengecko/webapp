const https = require('http');

const options = {
  hostname: 'http://127.0.0.1',
  port: 5500,
  path: '/webapp/Übungen/10/2/BMI-Rechner.html?gewicht=1&groesse=1',
  method: 'GET',
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', d => {
    process.stdout.write(d);
  });
});


req.end();

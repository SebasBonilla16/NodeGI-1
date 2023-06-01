const fs = require('fs');

fs.readFile('planets.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const planets = data.split(',');

  const trimmedPlanets = planets.map((planet) => planet.trim());

  trimmedPlanets.forEach((planet) => console.log(planet));
});

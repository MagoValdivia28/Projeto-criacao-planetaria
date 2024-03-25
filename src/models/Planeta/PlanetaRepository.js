import Planet from './Planeta.js';
import planetdata from '../../data/planets.js';

const planetaRepositorio = new PlanetaRepositorio();

const newPlanet = new Planet(planetdata.name, planetdata.date, planetdata.cores, planetdata.população, planetdata.galaxia, planetdata.sistemasolar, planetdata.coordenadasespaciais, planetdata.governante || 0);


planetaRepositorio.add(newPlanet);
class PlanetaRepositorio {
  constructor() {
    this.planets = [];
  }

  getAll() {
    return this.planets;
  }

  get(id) {
    return this.planets.find((planet) => planet.id === id);
  }

  add(planet) {
    this.planets.push(planet);
  }

  remove(id) {
    this.planets = this.planets.filter((planet) => planet.id !== id);
  }

  update(id, name, date, cores, população, galaxia, sistemasolar, coordenadasespaciais, governante) {
    const planet = this.get(id);

    if (planet) {
      planet.name = name;
      planet.date = date;
      planet.cores = cores;
      planet.população = população;
      planet.galaxia = galaxia;
      planet.sistemasolar = sistemasolar;
      planet.coordenadasespaciais = coordenadasespaciais;
      planet.governante = governante;
    }
    return planet;
  }
}


export default PlanetaRepositorio;
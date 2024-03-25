import Planet from "./Planeta"
import { planetdata } from "../../data/planets";


class PlanetaRep {
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

  update(id, name, date, cor1, cor2, população, galaxia,sistemasolar,coordenadasespaciais, governante) {
    const planet = this.get(id);

    if (planet) {
      planet.name = name;
      planet.date = date;
      planet.cor1 = cor1;
      planet.cor2 = cor2;
      planet.população = população;
      planet.galaxia = galaxia;
      planet.sistemasolar = sistemasolar;
      planet.coordenadasespaciais = coordenadasespaciais;
      planet.governante = governante;
    }
    return planet;
  }
}

const planetaRep = new PlanetaRep();

const newPlanet = new Planet(planetdata.name, planetdata.date, planetdata.cor1, planetdata.cor2, planetdata.população, planetdata.galaxia, planetdata.sistemasolar, planetdata.coordenadasespaciais, planetdata.governante || 0);


planetaRep.add(newPlanet);

export default planetaRep;
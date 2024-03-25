class planetadata {
  constructor(name, date, cor1, cor2, populacao, galaxia, sistemaSolar, coordenadasEspaciais, governante) {
    this.id = this.generateId();
    this.name = name;
    this.date = date;
    this.cor1 = cor1;
    this.cor2 = cor2;
    this.populacao = populacao;
    this.galaxia = galaxia;
    this.sistemaSolar = sistemaSolar;
    this.coordenadasEspaciais = coordenadasEspaciais;
    this.governante = governante;

  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
}

export default planetadata;
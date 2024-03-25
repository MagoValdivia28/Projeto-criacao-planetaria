class Planeta {
  constructor(nome, dataConquista, cor1, cor2, populacao, galaxia, galaxia, sistemaSolar, coordenadasEspaciais, titulo, governante) {
    this.id = this.generateId();
    this.nome = nome;
    this.dataConquista = dataConquista;
    this.cor1 = cor1;
    this.cor2 = cor2;
    this.populacao = populacao;
    this.galaxia = galaxia;
    this.titulo = titulo;
    this.galaxia = galaxia;
    this.sistemaSolar = sistemaSolar;
    this.coordenadasEspaciais = coordenadasEspaciais;
    this.governante = governante;

  }

  generateId() {
    return Math.floor(Math.random() * 1000);
  }
}

export default Planeta;
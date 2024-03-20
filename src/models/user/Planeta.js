class Planeta {
  constructor(nome, dataConquista, corPrimaria, corSecundaria, populacao, localizacao, governante, x, y, z, galaxia, sistemaSolar, coordenadasEspaciais, titulo) {
    this.nome = nome;
    this.dataConquista = dataConquista;
    this.corPrimaria = corPrimaria;
    this.corSecundaria = corSecundaria;
    this.populacao = populacao;
    this.localizacao = localizacao;
    this.governante = governante;
    this.titulo = titulo;
    this.x = x;
    this.y = y;
    this.z = z;
    this.galaxia = galaxia;
    this.sistemaSolar = sistemaSolar;
    this.coordenadasEspaciais = coordenadasEspaciais;
  }
}

export default Planeta;
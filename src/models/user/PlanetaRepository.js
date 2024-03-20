// Definindo o modelo para gerenciar planetas conquistados
export default class PlanetasRepository {
  constructor() {
      this.planetas = [];
      
  }

  getAll() {
      return this.planetas;
  }

  get(nome) {
      return this.planetas.find((planeta) => planeta.nome === nome);
  }

  add(planeta) {
      this.planetas.push(planeta);
  }

  remove(nome) {
      this.planetas = this.planetas.filter((planeta) => planeta.nome !== nome);
  }

  update(nome, dataConquista, corPrimaria, corSecundaria, populacao, recursosNaturais, numAssentamentos, localizacao, comunicacao, governante) {
      const planeta = this.get(nome);

      if (planeta) {
          planeta.dataConquista = dataConquista;
          planeta.corPrimaria = corPrimaria;
          planeta.corSecundaria = corSecundaria;
          planeta.populacao = populacao;
          planeta.recursosNaturais = recursosNaturais || 'Nenhum';
          planeta.numAssentamentos = numAssentamentos || 0;
          planeta.localizacao = localizacao;
          planeta.comunicacao = comunicacao || { frequencia: '', codificacao: '' };
          planeta.governante = governante;
      }
      return planeta;
  }
}

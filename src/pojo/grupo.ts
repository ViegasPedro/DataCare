export class Grupo {

  public nome: string;
  public criador: string;
  public paciente: string;


  constructor(){

  }

  setNome(nome){
    this.nome = nome;
  }
  getNome(){
    return this.nome;
  }
  setCriador(criador){
    this.criador = criador;
  }
  getCriador(){
    return this.criador;
  }
  setPaciente(paciente){
    this.paciente = paciente;
  }
  getPaciente(){
    return this.paciente;
  }
  toString(){

  }

}

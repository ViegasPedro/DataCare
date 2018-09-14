export class Paciente {

  public endereco: string;
  public nome: string;
  public hospital: string;
  public quarto: string;
  public data: string;

  constructor(){

  }

  setData(data){
    this.data = data;
  }
  getData(){
    return this.data;
  }

  setEndereco(endereco){
    this.endereco = endereco;
  }
  getEndereco(){
    return this.endereco;
  }

  setNome(nome){
    this.nome = nome;
  }
  getNome(){
    return this.nome;
  }

  setHospital(hospital){
    this.hospital = hospital;
  }
  getHospital(){
    return this.hospital;
  }

  setQuarto(quarto){
    this.quarto = quarto;
  }
  getQuarto(){
    return this.quarto;
  }
  toString(){

  }
}

export class Prontuario {

  public data: string;
  public observacao: string;
  public status: string;

  constructor(){

  }

  setData(data){
    this.data = data;
  }
  getData(){
    return this.data;
  }

  setObservacao(observacao){
    this.observacao = observacao;
  }
  getObservacao(){
    return this.observacao;
  }

  setStatus(status){
    this.status = status;
  }
  getStatus(){
    return this.status;
  }

  toString(){

  }
}

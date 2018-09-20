import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Paciente } from '../../pojo/paciente';
import { Usuario } from '../../pojo/usuario';

@Component({
  selector: 'page-md-paciente',
  templateUrl: 'md-paciente.html',
})
export class MdPacientePage {
  nome;
  data;
  endereco;
  quarto;
  hospital;

  paciente : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCrtl: ViewController) {
    // this.nome = this.navParams.get('nome');
    // this.data = this.navParams.get('id');
    // this.endereco = this.navParams.get('email');
    // this.quarto = this.navParams.get('cpf');
    // this.hospital = this.navParams.get('hospital');

    this.pegarPaciente();

  }


  fecharModal(){
    this.viewCrtl.dismiss();
  }

  pegarPaciente(){
    this.paciente = this.navParams.get("data");
    if(this.paciente){
    console.log(this.paciente.pacientes.nome + 'Paciente tela md-paciente');
    }else {
    console.log("ERRO");
    }
  }


}

import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Paciente } from '../../pojo/paciente';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCrtl: ViewController) {
    this.nome = this.navParams.get('nome');
    this.data = this.navParams.get('data');
    this.endereco = this.navParams.get('endereco');
    this.quarto = this.navParams.get('quarto');
    this.hospital = this.navParams.get('hospital');
  }

  ionViewDidLoad() {

  }

  fecharModal(){
    this.viewCrtl.dismiss();
  }


}

import { Component } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import { Grupo } from '../../pojo/grupo';

@Component({
  selector: 'page-md-info-grupo',
  templateUrl: 'md-info-grupo.html',
})
export class MdInfoGrupoPage {
  nome;
  paciente;
  criador;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCrtl: ViewController) {
    this.nome = this.navParams.get('nome');
    this.paciente = this.navParams.get('paciente');
    this.criador = this.navParams.get('criador');
  }

  ionViewDidLoad() {

  }

  fecharModal(){
    this.viewCrtl.dismiss()
  }


}

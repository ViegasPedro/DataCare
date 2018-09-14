import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PacientePage } from '../paciente/paciente';
import { GrupoPage } from '../grupo/grupo';
import { ProntuarioPage } from '../prontuario/prontuario'


@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  tab1Root=PacientePage;
  tab2Root=GrupoPage;
  tab3Root=ProntuarioPage;

  ionViewDidLoad() {

  }

}

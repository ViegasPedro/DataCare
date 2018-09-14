import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { MdProntuarioPage } from '../md-prontuario/md-prontuario';
import { Prontuario } from '../../pojo/prontuario';

@Component({
  selector: 'page-prontuario',
  templateUrl: 'prontuario.html',
})
export class ProntuarioPage {
  private prontuarios : Array<Prontuario> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
    let prontuario = new Prontuario();
    prontuario.setData("08/05/2018");
    prontuario.setStatus("Piorou/entre em contato");
    prontuario.setObservacao("Paciente piorou devido a alergia a algum medicamento, responsaveis pelo paciente Pedro, por favor entrar em contato");

    let prontuario2 = new Prontuario();
    prontuario2.setData("09/04/2018");
    prontuario2.setStatus("Paciente em melhora");
    prontuario2.setObservacao("Paciente melhorou bastante e está quase curado");

    this.prontuarios = [
      prontuario, prontuario2
    ]
  }

  ionViewDidLoad() {


  }
  openModal(prontuario){
    let data = prontuario;
    let myModal = this.modal.create(MdProntuarioPage, data);
    myModal.present();
  }

}

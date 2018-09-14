import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from 'ionic-angular';
import { MdInfoGrupoPage } from '../../modal/md-info-grupo/md-info-grupo';
import { Grupo } from '../../pojo/grupo';


@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {

  nome;
  paciente;
  criador;

  constructor(public modal: ModalController, public navParams: NavParams, public viewCrtl: ViewController) {
    this.nome = this.navParams.get('nome');
    this.paciente = this.navParams.get('paciente');
    this.criador = this.navParams.get('criador');
  }

  openInfo(){
    let grupo = new Grupo();
    grupo.nome = this.nome;
    grupo.paciente = this.paciente;
    grupo.criador = this.criador;
    let data = grupo;
    let myModal = this.modal.create(MdInfoGrupoPage, data);
    this.viewCrtl.dismiss();
    myModal.present();


  }

}

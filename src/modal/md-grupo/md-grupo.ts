import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController} from 'ionic-angular';
import { Grupo } from '../../pojo/grupo';
import { MdProntuarioPage } from '../../pages/md-prontuario/md-prontuario';
import { Prontuario } from '../../pojo/prontuario';
import { MdInfoGrupoPage } from '../md-info-grupo/md-info-grupo';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverComponent } from '../../components/popover/popover';

@Component({
  selector: 'page-md-grupo',
  templateUrl: 'md-grupo.html',
})
export class MdGrupoPage {
  private prontuarios : Array<Prontuario> = [];
  nome;
  paciente;
  criador;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCrtl: ViewController, public modal: ModalController, public popoverCtrl: PopoverController) {
    this.nome = this.navParams.get('nome');
    this.paciente = this.navParams.get('paciente');
    this.criador = this.navParams.get('criador');

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
    console.log('ionViewDidLoad MdGrupoPage');
  }
  fecharModal(){
    this.viewCrtl.dismiss();
  }

  openModal(prontuario){
    let data = prontuario;
    let myModal = this.modal.create(MdProntuarioPage, data);
    myModal.present();
  }

  openInfo(){
    let grupo = new Grupo();
    grupo.nome = this.nome;
    grupo.paciente = this.paciente;
    grupo.criador = this.criador;
    let data = grupo;
    let myModal = this.modal.create(MdInfoGrupoPage, data);
    myModal.present();
  }

  presentPopover(myEvent) {
    let grupo = new Grupo();
    grupo.nome = this.nome;
    grupo.paciente = this.paciente;
    grupo.criador = this.criador;
    let data = grupo;
    let popover = this.popoverCtrl.create(PopoverComponent, data);
    popover.present({
      ev: myEvent
    });
  }









}

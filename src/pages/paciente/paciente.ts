import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController} from 'ionic-angular';
import { MdPacientePage } from '../md-paciente/md-paciente'
import { Paciente } from '../../pojo/paciente';
import { Usuario } from '../../pojo/usuario';
import { UsuarioProvider } from '../../providers/usuario/usuario'


@Component({
  selector: 'page-paciente',
  templateUrl: 'paciente.html',
})
export class PacientePage {
  private pacientes : Array<Paciente> = [];

  pacientesList = [];

  constructor( public navCtrl: NavController, public navParams: NavParams,   public modal: ModalController,
    public toastController: ToastController, public usuarioProvider: UsuarioProvider  ){

    this.getPacientes();

  }


  openModal(paciente){
    let data = paciente;
    let myModal = this.modal.create(MdPacientePage, data);
    console.log(data);
    myModal.present();
  }

  getPacientes(){
    this.usuarioProvider.getPacientes().subscribe(data => this.pacientesList = data);
  }

}

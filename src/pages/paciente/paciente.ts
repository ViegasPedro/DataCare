import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { MdPacientePage } from '../md-paciente/md-paciente'
import { Paciente } from '../../pojo/paciente';


@Component({
  selector: 'page-paciente',
  templateUrl: 'paciente.html',
})
export class PacientePage {
  private pacientes : Array<Paciente> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
    let paciente = new Paciente();
    paciente.setData("08/05/2018");
    paciente.setHospital("Hospital São Camilo");
    paciente.setNome("Pedro Viegas");
    paciente.setQuarto("13");
    paciente.setEndereco("Rua São Camilo, 68");

    this.pacientes = [
      paciente
    ]
  }


  openModal(paciente){
    let data = paciente;
    let myModal = this.modal.create(MdPacientePage, data);
    myModal.present();
  }

}

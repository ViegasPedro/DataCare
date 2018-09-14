import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { MdGrupoPage } from '../../modal/md-grupo/md-grupo';
import { Grupo } from '../../pojo/grupo';
import { MdNovoGrupoPage } from '../../modal/md-novo-grupo/md-novo-grupo'

@Component({
  selector: 'page-grupo',
  templateUrl: 'grupo.html',
})
export class GrupoPage {
  private grupos : Array<Grupo> = [];
  private gruposAdmin: Array<Grupo> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController, public alertCtrl:AlertController) {

      let grupo = new Grupo();
      grupo.setNome("Amigos do Pedro");
      grupo.setPaciente("Pedro");
      grupo.setCriador("Viegas");

      let grupo2 = new Grupo();
      grupo2.setNome("Amigos Henrique");
      grupo2.setPaciente("Henrique");
      grupo2.setCriador("João");

      let grupo3 = new Grupo();
      grupo3.setNome("Amigos Viegas");
      grupo3.setPaciente("Viegas");
      grupo3.setCriador("Pedro");

      this.grupos=[grupo2, grupo3];
      this.gruposAdmin=[grupo];
  }

  ionViewDidLoad() {


  }
  openModal(grupo){
    let data = grupo;
    let myModal = this.modal.create(MdGrupoPage, data);
    myModal.present();
  }
  novoGrupo(){
    let alert = this.alertCtrl.create({
      title: 'Novo grupo',
      message: 'Deseja criar um novo grupo?',
      buttons:[
        {
          text:'SIM',
          handler: () =>{
            let myModal = this.modal.create(MdNovoGrupoPage);
            myModal.present();
          }
        },
        {
          text:'NÃO',
          handler: () =>{

          }
        }
      ]
    });
    alert.present();
  }





}

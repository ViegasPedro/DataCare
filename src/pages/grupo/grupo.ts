import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { MdGrupoPage } from '../../modal/md-grupo/md-grupo';
import { Grupo } from '../../pojo/grupo';
import { MdNovoGrupoPage } from '../../modal/md-novo-grupo/md-novo-grupo'
import { GrupoProvider } from '../../providers/grupo/grupo';

@Component({
  selector: 'page-grupo',
  templateUrl: 'grupo.html',
})
export class GrupoPage {
  private grupos : Array<Grupo> = [];
  private gruposAdmin: Array<Grupo> = [];
  gruposList = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public modal: ModalController,
   public alertCtrl:AlertController, public grupoProvider : GrupoProvider) {
    
      this.getGrupos();
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

  getGrupos(){
    this.grupoProvider.getGrupos().subscribe(data => this.gruposList = data);
  }

 


}

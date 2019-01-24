import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, AlertController} from 'ionic-angular';
import { Grupo } from '../../pojo/grupo';
import { MdProntuarioPage } from '../../pages/md-prontuario/md-prontuario';
import { Prontuario } from '../../pojo/prontuario';
import { MdInfoGrupoPage } from '../md-info-grupo/md-info-grupo';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverComponent } from '../../components/popover/popover';
import { MdNovoGrupoPage } from '../md-novo-grupo/md-novo-grupo';
import { GrupoProvider } from '../../providers/grupo/grupo';
@Component({
  selector: 'page-md-grupo',
  templateUrl: 'md-grupo.html',
})
export class MdGrupoPage {
  prontuarios = [];
  nome;
  paciente;
  adminId;
  id;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCrtl: ViewController, 
    public modal: ModalController, public popoverCtrl: PopoverController, 
    public alertController: AlertController, public grupoProvider : GrupoProvider) {
    this.pegarGrupo();
    this.getGruposProntuario(this.id);


    
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

  showAlert(){
    const alert = this.alertController.create({
      title:'Código do Grupo: DSR7JZ',
      message:'Diga a seus amigos para entrarem com esse código',
      buttons:['OK, ENTENDI']
    });
    alert.present();
  }

  openNovoGrupo(){
    let myModal = this.modal.create(MdNovoGrupoPage);
    myModal.present();
  }

  pegarGrupo(){
    this.nome = this.navParams.get('nome');
    this.paciente = this.navParams.get('paciente');
    this.adminId = this.navParams.get('adminId');
    this.id = this.navParams.get('id');
  }

  getGruposProntuario(id){
    console.log("inside getGruposProntuarios MdGrupoPage ",id)
    this.grupoProvider.getGruposProntuarios(id).subscribe(data => {this.prontuarios = data});
    
  }





}

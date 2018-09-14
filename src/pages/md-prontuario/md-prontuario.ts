import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Prontuario } from '../../pojo/prontuario';


@Component({
  selector: 'page-md-prontuario',
  templateUrl: 'md-prontuario.html',
})
export class MdProntuarioPage {
  status;
  data;
  observacao;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCrtl: ViewController) {
    this.status = this.navParams.get('status');
    this.data = this.navParams.get('data');
    this.observacao = this.navParams.get('observacao');
  }


  ionViewDidLoad() {

  }

  fecharModal(){
    this.viewCrtl.dismiss();
  }

}

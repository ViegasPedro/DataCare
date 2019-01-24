import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-md-novo-grupo',
  templateUrl: 'md-novo-grupo.html',
})
export class MdNovoGrupoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCrtl: ViewController) {
  }

  ionViewDidLoad() {
    
  }
  fecharModal(){
    this.viewCrtl.dismiss();
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PrincipalPage } from '../../pages/principal/principal';

/**
 * Generated class for the MdCodigoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-md-codigo',
  templateUrl: 'md-codigo.html',
})
export class MdCodigoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCrtl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MdCodigoPage');
  }

  fecharModal(){
    this.navCtrl.setRoot(PrincipalPage);

  }

}

import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    this.menu.swipeEnable( false );
  }

  btLogin() {
    this.navCtrl.setRoot(PrincipalPage);
  }

  ionViewWillEnter() {
    this.menu.swipeEnable( false )
  }

  ionViewDidLeave() {
    this.menu.swipeEnable( true )
  }
}

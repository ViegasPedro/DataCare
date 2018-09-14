import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MdCodigoPage } from '../modal/md-codigo/md-codigo';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;

  pages: Array<{title: string, component: any, icone: string}>;

  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu : MenuController, public alertCtrl:AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {title: "Editar perfil", component: '', icone:"person"},
      {title: "Códigos", component: MdCodigoPage, icone: "lock"}
    ];
  }
  openPage(page){
    this.menu.close();
    this.nav.setRoot(page.component);
  }

  logout(){
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      message: 'Deseja sair da sua conta?',
      buttons:[
        {
          text:'SIM',
          handler: () =>{
            this.menu.close();
            this.nav.setRoot(HomePage);
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

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PrincipalPage } from '../pages/principal/principal';
import { PacientePage } from '../pages/paciente/paciente';
import { GrupoPage } from '../pages/grupo/grupo';
import { ProntuarioPage } from '../pages/prontuario/prontuario';
import { MdPacientePage } from '../pages/md-paciente/md-paciente';
import { MdProntuarioPage } from '../pages/md-prontuario/md-prontuario';
import { MdGrupoPage } from '../modal/md-grupo/md-grupo';
import { MdInfoGrupoPage } from '../modal/md-info-grupo/md-info-grupo';
import { MdNovoGrupoPage } from '../modal/md-novo-grupo/md-novo-grupo';
import { MdCodigoPage } from '../modal/md-codigo/md-codigo';
import { PopoverComponent } from '../components/popover/popover';
import { UsuarioProvider } from '../providers/usuario/usuario';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    PacientePage,
    GrupoPage,
    ProntuarioPage,
    MdPacientePage,
    MdProntuarioPage,
    MdGrupoPage,
    MdInfoGrupoPage,
    MdNovoGrupoPage,
    MdCodigoPage,
    PopoverComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'top',}),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    PacientePage,
    GrupoPage,
    ProntuarioPage,
    MdPacientePage,
    MdProntuarioPage,
    MdGrupoPage,
    MdInfoGrupoPage,
    MdNovoGrupoPage,
    MdCodigoPage,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider
  ]
})
export class AppModule {}

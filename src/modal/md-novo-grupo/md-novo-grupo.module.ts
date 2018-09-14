import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MdNovoGrupoPage } from './md-novo-grupo';

@NgModule({
  declarations: [
    MdNovoGrupoPage,
  ],
  imports: [
    IonicPageModule.forChild(MdNovoGrupoPage),
  ],
})
export class MdNovoGrupoPageModule {}

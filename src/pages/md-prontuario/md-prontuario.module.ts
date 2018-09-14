import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MdProntuarioPage } from './md-prontuario';

@NgModule({
  declarations: [
    MdProntuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(MdProntuarioPage),
  ],
})
export class MdProntuarioPageModule {}

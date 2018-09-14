import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MdCodigoPage } from './md-codigo';

@NgModule({
  declarations: [
    MdCodigoPage,
  ],
  imports: [
    IonicPageModule.forChild(MdCodigoPage),
  ],
})
export class MdCodigoPageModule {}

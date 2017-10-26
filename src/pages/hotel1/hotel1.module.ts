import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Hotel1Page } from './hotel1';

@NgModule({
  declarations: [
    Hotel1Page,
  ],
  imports: [
    IonicPageModule.forChild(Hotel1Page),
  ],
  exports: [
    Hotel1Page
  ]
})
export class Hotel1PageModule {}

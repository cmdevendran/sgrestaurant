import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VieworderPage } from './vieworder';

@NgModule({
  declarations: [
    VieworderPage,
  ],
  imports: [
    IonicPageModule.forChild(VieworderPage),
  ],
  exports: [
    VieworderPage
  ]
})
export class VieworderPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RestordersPage } from './restorders';

@NgModule({
  declarations: [
    RestordersPage,
  ],
  imports: [
    IonicPageModule.forChild(RestordersPage),
  ],
  exports: [
    RestordersPage
  ]
})
export class RestordersPageModule {}

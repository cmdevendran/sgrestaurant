import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuhomePage } from './menuhome';

@NgModule({
  declarations: [
    MenuhomePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuhomePage),
  ],
  exports: [
    MenuhomePage
  ]
})
export class MenuhomePageModule {}

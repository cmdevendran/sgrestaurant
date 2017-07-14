import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuitemPage } from './menuitem';

@NgModule({
  declarations: [
    MenuitemPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuitemPage),
  ],
  exports: [
    MenuitemPage
  ]
})
export class MenuitemPageModule {}

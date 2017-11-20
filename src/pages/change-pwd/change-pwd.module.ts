import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangePwdPage } from './change-pwd';

@NgModule({
  declarations: [
    ChangePwdPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangePwdPage),
  ],
  exports: [
    ChangePwdPage
  ]
})
export class ChangePwdPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatemenuitemPage } from './createmenuitem';

@NgModule({
  declarations: [
    CreatemenuitemPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatemenuitemPage),
  ],
  exports: [
    CreatemenuitemPage
  ]
})
export class CreatemenuitemPageModule {}

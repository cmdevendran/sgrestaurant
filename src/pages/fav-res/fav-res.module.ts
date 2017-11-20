import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavResPage } from './fav-res';

@NgModule({
  declarations: [
    FavResPage,
  ],
  imports: [
    IonicPageModule.forChild(FavResPage),
  ],
})
export class FavResPageModule {}

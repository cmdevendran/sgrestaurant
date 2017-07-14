import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenucategoryPage } from './menucategory';

@NgModule({
  declarations: [
    MenucategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MenucategoryPage),
  ],
  exports: [
    MenucategoryPage
  ]
})
export class MenucategoryPageModule {}

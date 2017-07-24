import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/restaurant';
import {AskProvider} from '../../providers/ask';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the MenuitemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menuitem',
  templateUrl: 'menuitem.html',
})
export class MenuitemPage {

//datas : AskProvider[];
datas : any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private restData: RestProvider,private alertController: AlertController) {
    this.restData.getUserRestaurants().subscribe(data => {
      this.datas = data;
      console.log(this.datas);


  });
  }

cucumber : string;
  showAlert(data) {
  this.cucumber = data.name;
    console.log(data._id);
    let alert = this.alertController.create({

        title: this.cucumber,
        subTitle: 'test',
        buttons: ['OK']
    });

    alert.present();
}


menuCat : any;

mycats : any[];



  addMenuCategory() {

  let passme = {
  menuCat : this.menuCat,
  }
  this.restData.addMenuCategory(passme).subscribe(data => {
    this.mycats = data;
    console.log("add menu category"+this.mycats);


});
}




  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuitemPage');
  }

}

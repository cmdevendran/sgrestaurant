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
  datas: any[];
  menudatas: any[];
  restid: string;
  restname : string;
  vmenuCat : string;



  constructor(public navCtrl: NavController, public navParams: NavParams,
    private restData: RestProvider, private alertController: AlertController) {
    this.restData.getUserRestaurants().subscribe(data => {
      //  this.datas = data;
      this.restid = data._id;
      this.restname = data.name;
      this.menudatas = data.menucategory;
      console.log(data);


    });

  }

  cucumber: string;
  showAlert(data) {
    this.cucumber = data.categoryname;

    let alert = this.alertController.create({

      title: this.cucumber,
      subTitle: data.categoryname,
      buttons: ['OK']
    });

    alert.present();
  }




  mycats: any[];






  addMenuCategory(menuCat) {

    console.log(" menucat  : " + menuCat + " id : " + this.restid);
    let passme = {
      menuCat1: menuCat,
      id: this.restid
    }

    this.restData.addMenuCategory(passme).subscribe(data => {
      this.menudatas = data.menucategory;



    });
    menuCat="";
  }

  confirmDeleteMenuCategory(menuCate){

      let confirm = this.alertController.create({
        title: 'Delete Menu Category?',
        message: 'Confirm to Delete: '+ menuCate,
        buttons: [
          {
            text: 'No',
            handler: () => {
              console.log('Disagree clicked');
            }
          },
          {
            text: 'Yes',
            handler: () => {
              console.log('Agree clicked');
                this.deleteMenuCategory(menuCate);
            }
          }
        ]
      });
      confirm.present();



  }

  deleteMenuCategory(menuCate) {

    console.log(" menucat  : " +menuCate + " id : " + this.restid);
    let passme = {
      menuCat1: menuCate,
      id: this.restid
    }

    this.restData.deleteMenuCategory(passme).subscribe(data => {
      this.menudatas = data.menucategory;



    });
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuitemPage');
  }

}

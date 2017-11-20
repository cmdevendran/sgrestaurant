import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FavResPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fav-res',
  templateUrl: 'fav-res.html',
})
export class FavResPage {
  tabBarEle: any;
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarEle = document.querySelector('.tabbar.show-tabbar');
    this.items = [{
      img: "assets/img/burger.png",
      name: "Subway",
      lastVisit: "13 May 2017"
    },
    {
      img: "assets/img/burger.png",
      name: "Subway",
      lastVisit: "13 May 2017"
    },
    {
      img: "assets/img/burger.png",
      name: "Subway",
      lastVisit: "13 May 2017"
    },
    {
      img: "assets/img/burger.png",
      name: "Subway",
      lastVisit: "13 May 2017"
    },
    {
      img: "assets/img/burger.png",
      name: "Subway",
      lastVisit: "13 May 2017"
    }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavResPage');
    this.tabBarEle.style.display = 'none';
  }
  onViewWillEnter() {
  }

  ionViewWillLeave() {
    this.tabBarEle.style.display = 'flex';
  }

}

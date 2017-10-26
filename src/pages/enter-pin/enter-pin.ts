import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {MenuhomePage} from '../menuhome/menuhome';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Keyboard } from '@ionic-native/keyboard';
import { HotelPage } from "../hotel/hotel";
import { Hotel1Page } from "../hotel1/hotel1";


/**
 * Generated class for the EnterPinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enter-pin',
  templateUrl: 'enter-pin.html',
})
export class EnterPinPage implements AfterViewInit{
  private pinForm : FormGroup;
  test = null;
  @ViewChild('numval') vc;
  tabBarEle : any;
key: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl: ModalController, public formBuilder: FormBuilder ) {
    this.tabBarEle = document.querySelector('.tabbar.show-tabbar');
    this.pinForm = this.formBuilder.group({
      vrestid :[""]
    });
  }

  // ngOnInit() {
  //   document.getElementById("partitioned").focus();
  // }

  ionViewDidLoad() {

    console.log('ionViewDidLoad EnterPinPage');
    setTimeout(() => {
      // var input = <HTMLInputElement>document.getElementById('partitioned');
      // console.log("Input :",input);
      // input.focus();  
      // this.keyboard.show(); // for android
      // this.vc.setFocus();
    },150); //a least 150m
    // document.getElementById("partitioned").focus();
  }

  ngAfterViewInit() {
    // var input = <HTMLInputElement>document.getElementById('partitioned');
    // console.log("Input :",input);
    // input.focus();            
  }

  ionViewWillEnter() {
    this.tabBarEle.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarEle.style.display = 'flex';
  }
  pinSub() {
    //this.navCtrl.push(QrCodePage);
  }
  test1(event) {
    //event.target.next().focus();
    console.log(event);
  }
  ValidatePassKey(tb) {
    console.log(tb.target.value.length)
    if (tb.target.value.length >= 1)
      document.getElementById(tb.target.id + 1).focus();
    }
    gotoHome() {
      this.navCtrl.pop();
    }

    gotoHotel(id1){
      let vrestid = this.pinForm.value.vrestid
      console.log("rest id : "+this.pinForm.value.vrestid+" :"+id1);
  

    //this.navCtrl.pop(HotelPage,{ id : id1});
    //this.navCtrl.push(Hotel1Page,{ id : id1});
    this.presentProfileModal(id1)


    
  
   
  
    }

    presentProfileModal(id1) {
      const profileModal = this.modalCtrl.create(Hotel1Page, { id : id1});
      profileModal.present();
    }

  }


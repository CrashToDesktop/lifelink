import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CardInfoPage } from './card-info/card-info';
import { CardArtPage } from './card-art/card-art';

@Component({
  selector: 'page-card-detail',
  templateUrl: 'card-detail.html'
})
export class CardDetailPage {
  tabs = [
    { title: 'Info', component: CardInfoPage, icon: 'chat'},
    { title: 'Art', component: CardArtPage, icon: 'chat'}
  ];
  card: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.card = navParams.get('card');

    //If no card is received, pop the view out of the stack
    if (!this.card) {
      navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardDetailPage');
  }

}

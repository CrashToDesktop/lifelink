import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CardProvider } from '../../../../providers/card/card.provider';

@Component({
  selector: 'page-card-art',
  templateUrl: 'card-art.html',
})
export class CardArtPage {
  card: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cardProvider: CardProvider) {
    this.card = navParams.get('card');

    //If no card is received, pop the view out of the stack
    if (!this.card) {
      navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardArtPage');
  }

  getCardImage() {
    return this.cardProvider.getCardImage(this.card, 'normal');
  }

}

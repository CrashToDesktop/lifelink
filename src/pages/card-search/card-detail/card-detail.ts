import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-card-detail',
  templateUrl: 'card-detail.html',
})
export class CardDetailPage {

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

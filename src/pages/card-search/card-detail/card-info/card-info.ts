import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BrowserTab } from '@ionic-native/browser-tab';
import { CardProvider } from '../../../../providers/card/card.provider';

@Component({
  selector: 'page-card-info',
  templateUrl: 'card-info.html',
  providers: [BrowserTab]
})
export class CardInfoPage {
  card: any;

  constructor(private browserTab: BrowserTab, private cardProvider: CardProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.card = navParams.get('card');

    //If no card is received, pop the view out of the stack
    if (!this.card) {
      navCtrl.pop();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardInfoPage');
  }

  goToLMPage() {
    this.browserTab.isAvailable()
    .then(isAvailable => {
      if (isAvailable) {
        this.browserTab.openUrl(`https://www.ligamagic.com/?view=cards%2Fsearch&card=${this.card.name}`);
      } else {
        //Show a pop-up about the error maybe
      }
    })
  }

  getLigaMagicPage() {
    return `https://www.ligamagic.com/?view=cards%2Fsearch&card=${this.card.name}`;
  }

  getCardOracleText() {
    return this.cardProvider.getCardOracleText(this.card);
  }

  getCardManaCost() {
    return this.cardProvider.getCardManaCost(this.card);
  }

}

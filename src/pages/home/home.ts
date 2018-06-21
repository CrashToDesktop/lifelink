import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardProvider } from '../../providers/card/card.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cardSymbols = [
    '{W}','{U}','{B}','{R}','{G}'
  ]

  constructor(public navCtrl: NavController, private cardProvider: CardProvider) {
  }

  getHtml(symbol: string): string {
    return this.cardProvider.getCardOracleText({oracle_text: symbol});
  }
}

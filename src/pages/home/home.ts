import { Component      } from '@angular/core';
import { NavController  } from 'ionic-angular';
import { CardProvider   } from '../../providers/card/card.provider';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cardSymbols: any[];

  constructor(public navCtrl: NavController, private cardProvider: CardProvider) {
    this.cardProvider.getAllSymbols()
    .then(res => {
      let scryfallObj = JSON.parse(res.data);
      this.cardSymbols = scryfallObj['data'];
    })
    .catch(err => {
      console.error(err);
    });
  }

  getHtml(symbol): string {
    return this.cardProvider.getCardOracleText({oracle_text: symbol.symbol});
  }
}

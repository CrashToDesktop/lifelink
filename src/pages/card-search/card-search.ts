import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CardDetailPage } from './card-detail/card-detail';
import { CardProvider } from '../../providers/card/card.provider';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-card-search',
  templateUrl: 'card-search.html'
})
export class CardSearchPage {
  searchTerms: string;
  searchResults: Observable<any>;
  status: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cardProvider: CardProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardSearchPage');
  }

  basicSearch() {
    this.cardProvider.cardSearch(this.searchTerms)
    .then(res => {
      let scryfallObj = JSON.parse(res.data);
        this.status = 2;
        this.searchResults = scryfallObj.data;
    })
    .catch(err => {
      // let error = JSON.parse(err.error);
      
      // if (error.status === 404) {
      //   this.status = 1;
      // }

      console.error(err);
    });
  }

  clearSearch() {
    this.status = 0;
    this.searchResults = undefined;
  }

  getCardImage(targetCard, size) {
    return this.cardProvider.getCardImage(targetCard, size);
  }

  viewCard(targetCard) {
    this.navCtrl.push(CardDetailPage, { card: targetCard })
  }
}

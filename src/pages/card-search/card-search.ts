import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/**
 * Generated class for the CardSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-card-search',
  templateUrl: 'card-search.html',
})
export class CardSearchPage {
  searchTerms: string;
  searchResults: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardSearchPage');
  }

  basicSearch() {
    this.http.get(`https://api.scryfall.com/cards/search`, {q: this.searchTerms}, {})
      .then(res => {
        let scryfallObj = JSON.parse(res.data);
        this.searchResults = scryfallObj.data;
      })
      .catch(err => {
        console.error(err);
      })
  }

  clearSearch() {
    this.searchResults = undefined;
  }

}

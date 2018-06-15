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
  status: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HTTP) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardSearchPage');
  }

  basicSearch() {
    console.log(`Sending request with search parameters ${this.searchTerms}`);
    this.http.get(`https://api.scryfall.com/cards/search`, {q: this.searchTerms}, {})
      .then(res => {
        let scryfallObj = JSON.parse(res.data);
          this.status = 2;
          this.searchResults = scryfallObj.data;
      })
      .catch(err => {
        let error = JSON.parse(err.error);
        
        if (error.status === 404) {
          this.status = 1;
        }

        console.error(err.error);
      })
  }

  clearSearch() {
    this.status = 0;
    this.searchResults = undefined;
  }

}

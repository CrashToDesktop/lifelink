import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppProvidersCardProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CardProvider {

  constructor(public http: HTTP) {
    console.log('Hello CardProvider Provider');
  }

  /* Methods to get cards from the API */
  cardSearch(searchTerms) {
    console.log(`Sending request with search parameters: '${searchTerms}'`);
    return this.http.get(`https://api.scryfall.com/cards/search`, {q: searchTerms}, {});
  }

  /* Methods to get data from a certain card object */
  getCardImage(card: any, size: string) {
    if (card.layout === 'transform') {
      return card['card_faces'][0]['image_uris'][size];
    }
  
    return card['image_uris'][size];
  }

}

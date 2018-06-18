import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';

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
  getCardImage(card: any, size: string): string {
    if (card['layout'] === 'transform') {
      return card['card_faces'][0]['image_uris'][size];
    }
  
    return card['image_uris'][size];
  }

  getCardOracleText(card: any) {
    return card['oracle_text'].replace('\n', '<br/><br/>');
  }

  getCardManaCost(card: any) {
    return card['mana_cost']
      .replace('{W}', '<abbr class="card-symbol card-symbol-W" title="one white mana">{W}</abbr>')
      .replace('{U}', '<abbr class="card-symbol card-symbol-U" title="one blue mana">{U}</abbr>')
      .replace('{B}', '<abbr class="card-symbol card-symbol-B" title="one black mana">{B}</abbr>')
      .replace('{R}', '<abbr class="card-symbol card-symbol-R" title="one red mana">{R}</abbr>')
      .replace('{G}', '<abbr class="card-symbol card-symbol-G" title="one green mana">{G}</abbr>');
  }

}

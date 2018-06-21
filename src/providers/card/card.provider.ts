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

  getCardManaCost(card: any) {
    return this.getCardSymbols(card['mana_cost']);
  }

  getCardOracleText(card: any) {
    return this.getCardSymbols(card['oracle_text']);
  }

  // getCardManaCost(card: any) {
  //   let convertedCost: string = card['mana_cost'].replace(
  //     new RegExp('\{(1/2{1})\}', 'g'),
  //     '<i class="ms ms-1-2 ms-cost"></i> '
  //   ).replace(
  //     new RegExp('\{(\u221E{1})\}', 'g'),
  //     '<i class="ms ms-infinity ms-cost"></i> '
  //   ).replace(
  //     new RegExp('\{([WUBRG]{1})/P\}', 'g'),
  //     '<i class="ms ms-$1p ms-cost"></i> '
  //   ).replace(
  //     new RegExp('\{([WUBRG]{1}|[1-2]{1})/([WUBRG])\}', 'g'),
  //     '<i class="ms ms-$1$2 ms-split ms-cost"></i> '
  //   ).replace(
  //     new RegExp('\{([WUBRGXYZCS]{1}|[0-9]{1}|[1-2][0-9]{1}|100{1}|1000000{1})\}', 'g'),
  //     '<i class="ms ms-$1 ms-cost"></i> '
  //   ).toLocaleLowerCase();
  //   return convertedCost;
  // }

  getCardSymbols(str: string) {
    return str.replace(
      /\{([WUBRGXYZCSHTQPWAOSE]+|[0-9]+)\/?([WUBRGP]+)?\}/g,
      '<i class="card-symbol card-symbol-$1$2">{$1$2}</i>'
    ).replace(
      /\{(\u221e)\}/g,
      '<i class="card-symbol card-symbol-INFINITY">{$1}</i>'
    ).replace(
      /\{(\u00bd)\}/g,
      '<i class="card-symbol card-symbol-HALF">{$1}</i>'
    ).replace(
      /\n/,
      '<br>'
    );
  }

  getAllSymbols(): Promise<any> {
    return this.http.get('https://api.scryfall.com/symbology', {}, {});
  }

}

import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

/* Fontawesome imports */
import fontawesome from '@fortawesome/fontawesome'
import faSkull from '@fortawesome/fontawesome-free-solid/faSkull'

@Component({
  selector: 'page-life-tracker',
  templateUrl: 'life-tracker.html',
})
export class LifeTrackerPage {
  players: any[] = [
    { name: 'Marx', lp: 40, art: 'https://img.scryfall.com/cards/art_crop/en/c17/35.jpg' },
    { name: 'Erivan', lp: 40, art: 'https://img.scryfall.com/cards/art_crop/en/ktk/206.jpg' },
    { name: 'Max', lp: 40, art: 'https://img.scryfall.com/cards/art_crop/en/c16/50.jpg' },
    { name: 'Emanuell', lp: 40, art: 'https://img.scryfall.com/cards/art_crop/en/m13/197.jpg' }
  ]

  active: number = 0;

  constructor(private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    fontawesome.library.add(faSkull);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifeTrackerPage');
  }

  playerTap(ev, player) {
    if (ev.srcEvent.pageX < this.platform.width()/2) {
      this.changeLife(player, -1);
    } else {
      this.changeLife(player, 1);
    }
  }

  isPlayerAlive(player): boolean {
    if (player.lp <= 0) {
      return false;
    }

    return true;
  }

  changeLife(player, amount) {
    player.lp += amount;
  }

}

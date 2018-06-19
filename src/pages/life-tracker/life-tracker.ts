import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifeTrackerPage');
  }

}

import { Component                          } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

/* Fontawesome imports */
import fontawesome                            from '@fortawesome/fontawesome';
import faSkull                                from '@fortawesome/fontawesome-free-solid/faSkull';
import faRedo                                 from '@fortawesome/fontawesome-free-solid/faRedo';
import faCog                                  from '@fortawesome/fontawesome-free-solid/faCog';
import faHeartbeat                            from '@fortawesome/fontawesome-free-solid/faHeartbeat';
import faTint                                 from '@fortawesome/fontawesome-free-solid/faTint';
import faBook                                 from '@fortawesome/fontawesome-free-solid/faBook';
import faUsers                                from '@fortawesome/fontawesome-free-solid/faUsers';

@Component({
  selector: 'page-life-tracker',
  templateUrl: 'life-tracker.html',
})
export class LifeTrackerPage {
  players: any[];
  resource = 'life';
  config = {
    life: 40,
    poison: 0,
    library: 99,
    alive: true,
    players: [
      //{ name: 'Marx',     art: 'https://img.scryfall.com/cards/art_crop/en/c17/35.jpg' },
      { name: 'Erivan',   art: 'https://img.scryfall.com/cards/art_crop/en/ktk/206.jpg' },
      { name: 'Max',      art: 'https://img.scryfall.com/cards/art_crop/en/c16/50.jpg' },
      { name: 'Emanuell', art: 'https://img.scryfall.com/cards/art_crop/en/m13/197.jpg' }
    ]
  }

  active: number = 0;
  pan: number = 0;
  global: boolean = false;

  constructor(private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.buildFaLibrary();
    this.restart();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifeTrackerPage');
  }

  buildFaLibrary() {
    fontawesome.library.add(faSkull);
    fontawesome.library.add(faRedo);
    fontawesome.library.add(faCog);
    fontawesome.library.add(faHeartbeat);
    fontawesome.library.add(faTint);
    fontawesome.library.add(faBook);
    fontawesome.library.add(faUsers)
  }

  playerTap(ev, player) {
    if (ev.srcEvent.pageX < this.platform.width()/2) {
      this.alterResource(player, -1);
    } else {
      this.alterResource(player, 1);
    }
  }

  playerPan(ev, player) {
    this.pan++;
    if (this.pan >= 15) {
      if (ev['additionalEvent'] === 'panright') {
        this.alterResource(player, 5);
      }

      if (ev['additionalEvent'] === 'panleft') {
        this.alterResource(player, -5);
      }
      
      this.pan = 0;
    }
  }

  isPlayerAlive(player): boolean {
    if (player.life <= 0) {
      return false;
    }

    if (player.poison >= 10) {
      return false;
    }

    if (player.library < 0) {
      return false;
    }

    return player.alive;
  }

  alterResource(player, amount) {
    if (this.global) {
      this.players.forEach(player => {
        if (this.isPlayerAlive(player)) {
          player[this.resource] += amount;
        }
      });
    }
    else {
      player[this.resource] += amount;
    }
  }

  getCurrentResource(player) {
    return player[this.resource];
  }
  
  getArtKey(player) {
    if (player.art) {
      return 'background-image';
    }

    return 'background-color';
  }

  getArtValue(player) {
    if (player.art) {
      return player.art;
    }

    if (player.color) {
      return player.color;
    }

    return 'gray';
  }

  restart() {
    this.players = [];

    this.config.players.forEach(player => {
      let i = this.players.push(player) - 1;
        
      for (let key in this.config) {
        if (this.config.hasOwnProperty(key) && key !=='players') {
          this.players[i][key] = this.config[key];
        }
      }
    });
  }

}

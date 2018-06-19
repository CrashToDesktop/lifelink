import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CardSearchPage } from '../pages/card-search/card-search';

import { HomePage } from '../pages/home/home';
import { LifeTrackerPage } from '../pages/life-tracker/life-tracker';
@Component({
  templateUrl: 'app.html'
})
export class App {
  @ViewChild('nav') navCtrl: NavController;
  rootPage = HomePage;

  pages = [
    {title: 'Card search', component: CardSearchPage},
    {title: 'Life tracking', component: LifeTrackerPage}
  ]
 
  constructor(public menuCtrl: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(destination) {
    this.menuCtrl.close();
    this.navCtrl.push(destination.component);
  }
}


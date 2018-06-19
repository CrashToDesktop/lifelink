import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HTTP } from '@ionic-native/http';

import { App } from './app.component';
import { HomePage } from '../pages/home/home';
import { CardSearchPage } from '../pages/card-search/card-search';
import { CardDetailPage } from '../pages/card-search/card-detail/card-detail';
import { CardInfoPage } from '../pages/card-search/card-detail/card-info/card-info';
import { CardArtPage } from '../pages/card-search/card-detail/card-art/card-art';
import { CardProvider } from '../providers/card/card.provider';
import { LifeTrackerPage } from '../pages/life-tracker/life-tracker';

@NgModule({
  declarations: [
    App,
    HomePage,
    CardSearchPage,
    CardDetailPage,
    CardInfoPage,
    CardArtPage,
    LifeTrackerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(App)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    HomePage,
    CardSearchPage,
    CardDetailPage,
    CardInfoPage,
    CardArtPage,
    LifeTrackerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    CardProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

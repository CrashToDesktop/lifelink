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

@NgModule({
  declarations: [
    App,
    HomePage,
    CardSearchPage,
    CardDetailPage
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
    CardDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

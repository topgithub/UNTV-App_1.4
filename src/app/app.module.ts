import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SchedulesPage } from '../pages/schedules/schedules';
import { RadioprogramsPage } from '../pages/radioprograms/radioprograms';
import { VideosPage } from '../pages/videos/videos';
import { AdvocaciesPage } from '../pages/advocacies/advocacies';
import { FavoritesPage } from '../pages/favorites/favorites';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ContactusPage } from '../pages/contactus/contactus';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SchedulesPage,
    RadioprogramsPage,
    VideosPage,
    AdvocaciesPage,
    FavoritesPage,
    AboutusPage,
    ContactusPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SchedulesPage,
    RadioprogramsPage,
    VideosPage,
    AdvocaciesPage,
    FavoritesPage,
    AboutusPage,
    ContactusPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

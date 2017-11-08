import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SchedulesPage } from '../pages/schedules/schedules';
import { RadioprogramsPage } from '../pages/radioprograms/radioprograms';
import { VideosPage } from '../pages/videos/videos';
import { AdvocaciesPage } from '../pages/advocacies/advocacies';
import { FavoritesPage } from '../pages/favorites/favorites';
import { AboutusPage } from '../pages/aboutus/aboutus';
import { ContactusPage } from '../pages/contactus/contactus';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'News', component: HomePage },
      { title: 'UNTV Programs', component: ListPage },
      { title: 'UNTV Schedules', component: SchedulesPage },
      { title: 'Radio Programs', component: RadioprogramsPage },
      { title: 'Videos', component: VideosPage },
      { title: 'Advocacies', component: AdvocaciesPage },
      { title: 'Favorites', component: FavoritesPage },
      { title: "About Us", component: AboutusPage },
      { title: "Contact Us", component: ContactusPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RadioprogramsPage } from './radioprograms';

@NgModule({
  declarations: [
    RadioprogramsPage,
  ],
  imports: [
    IonicPageModule.forChild(RadioprogramsPage),
  ],
})
export class RadioprogramsPageModule {}

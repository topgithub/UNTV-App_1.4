import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdvocaciesPage } from './advocacies';

@NgModule({
  declarations: [
    AdvocaciesPage,
  ],
  imports: [
    IonicPageModule.forChild(AdvocaciesPage),
  ],
})
export class AdvocaciesPageModule {}

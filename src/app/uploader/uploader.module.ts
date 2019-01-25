import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UploaderPage } from './uploader.page';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: UploaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	RouterModule.forChild(routes),
	ShareModule
  ],
  declarations: [UploaderPage]
})
export class UploaderPageModule {}

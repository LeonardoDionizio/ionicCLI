import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DynamicPage } from './../dynamic/dynamic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public pushDynamic(): void{
    this.navCtrl.push(DynamicPage);
  }

}

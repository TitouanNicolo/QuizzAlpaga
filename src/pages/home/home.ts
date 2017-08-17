import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { GamePage } from '../game/game';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
     goToGame(params){
    if (!params) params = {};
    this.navCtrl.push(GamePage);
  }

}

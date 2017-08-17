import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams} from 'ionic-angular';
// import { GamePage } from '../game/game';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {
  score : number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.score = this.navParams.get('key');
 
  }
 
     goToGame(params){
    if (!params) params = {};
    this.navCtrl.push(ResultPage);
  }

}

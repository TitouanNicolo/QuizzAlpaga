import { Component } from '@angular/core';
import { NavController, IonicPage, AlertController } from 'ionic-angular';
import { GameService } from './game.service';
import { ResultPage } from '../result/result';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
  providers: [GameService]
})
export class GamePage {
  private questions: any;
  private question: any;
  compteur: number = 0;
  compteurScore: number = 1;


  constructor(public _Questions: GameService, public nav: NavController, private alertCtrl: AlertController) {

  }

  ngOnInit() {
    this._Questions.findAll().then(res => {
      this.questions = res;
      this.getCurrentQuestion();
    });
  }

  getCurrentQuestion() {
    this.compteur++;
    this.question = this.questions.find(item => item.questionId === this.compteur);    
    if (this.compteur > this.questions.length) {  
      this.nav.push(ResultPage, { key: this.compteurScore });
    }
  }

  getAnswer(id: number) {
    console.log(id);
    console.log(this.question.rightAnswer);
    let alert;

    if (this.question.rightAnswer === id) {
      alert = this.alertCtrl.create({
        title: 'Bonne réponse',
        subTitle: 'Bien joué'
      });
      alert.present();
    } else {
      alert = this.alertCtrl.create({
        title: 'Mauvaise réponse',
        subTitle: 'Tu reviens à la case départ'
      });
      alert.present();
      this.compteurScore += 1;
      this.compteur = 0;//Retour à la première question
    }

    setTimeout(() => {
      this.getCurrentQuestion()
      alert.dismiss()
    }
      , 1500)
  }

  
}




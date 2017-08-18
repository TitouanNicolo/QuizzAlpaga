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
  compteurScore: number = 0;


  constructor(public _Questions: GameService, public nav: NavController ,private alertCtrl: AlertController) {

  }

  ngOnInit() {
    this._Questions.findAll().then(res => {
      this.questions = res;

      this.getCurrentQuestion();
      console.log(this.question + "C'est la question");
      
    });
  }

  getCurrentQuestion() {

    this.compteur++;
    this.question = this.questions.find(item => item.questionId === this.compteur);
    //console.log(this.questions.length+ " zzzz " +  this.compteur);
    
    if (this.compteur > this.questions.length) {
      console.log('Je passe if');
       console.log(this.questions.length+ " zzzz " +  this.compteur);
       this.nav.push(ResultPage, {key:this.compteurScore});
    }
  }

  getAnswer(id: number) {
    console.log(id);
    console.log(this.question.rightAnswer);

    if (this.question.rightAnswer === id) {
      let alert = this.alertCtrl.create({
        title: 'Bonne réponse',
        subTitle: 'Bien joué',
        buttons: ['Fermer']
      });
      alert.present();
      this.compteurScore += 666;
     
    } else {
      let alert = this.alertCtrl.create({
        title: 'Mauvaise réponse',
        subTitle: 'Noob',
        buttons: ['Fermer']
      });
      alert.present();
    }
    this.getCurrentQuestion();

  }

}




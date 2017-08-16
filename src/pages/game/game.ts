import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GameService } from './game.service';


@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
  providers: [GameService]
})
export class GamePage {
  private questions: any;
  private question: any;
  compteur: number = 0;
  compteurScor: number;


  constructor(public _Questions: GameService, public nav: NavController) {

  }

  ngOnInit() {
    this._Questions.findAll().then(res => {
      this.questions = res;
      this.getCurrentQuestion();
      console.log(this.question);
      
    });
  }

  getCurrentQuestion() {

    this.compteur++;
    this.question = this.questions.find(item => item.id === this.compteur);
    //console.log(this.questions.length+ " zzzz " +  this.compteur);

   
    
    if (this.compteur > this.questions.length) {
      console.log('Je passe if');
       console.log(this.questions.length+ " zzzz " +  this.compteur);
        this.nav.push("Home");
    }
  }

  getAnswer(id: number) {
    console.log(id);
    console.log(this.question.rightAnswer);

    if (this.question.rightAnswer === id) {
      alert("Bonne réponse");
    } else {
      alert("Mauvaise réponse");
    }
    this.getCurrentQuestion();

  }

}




import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RiddleService } from '../services/riddle.service';
import { Riddle } from '../_models/riddle.model';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Level } from '../_models/level.model';

@Component({
  selector: 'app-attempt-riddle-page',
  templateUrl: './attempt-riddle-page.component.html',
  styleUrls: ['./attempt-riddle-page.component.css'],
})
export class AttemptRiddlePageComponent implements OnInit {
  myRiddleSub: Subscription;
  loadedRiddles: Riddle[] = [];
  levels: Level[] = [];
  response: String;
  riddleId: number;
  correctResponse: boolean = false;
  wrongResponse: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private riddlesService: RiddleService
  ) {}

  ngOnInit(): void {
    console.log('in riddle');
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.riddleId = id;

      this.myRiddleSub = this.riddlesService
        .getRiddle(this.riddleId)
        .subscribe(
          (result) => (
            (this.loadedRiddles = result.riddles), console.log(result)
          )
        );
    });
  }

  clickedSubmitAnswer(attempt: NgForm, levelnum: number) {
    let myAnswer = attempt.controls['answer'].value;
    let riddleAnswer = this.loadedRiddles[0].levels[levelnum - 1].answer;
    console.log('Real answer:', riddleAnswer);
    console.log('My answer:', myAnswer);

    if (riddleAnswer.includes(myAnswer)) {
      this.correctResponse = true;
      this.wrongResponse = false;
    } else {
      this.wrongResponse = true;
      this.correctResponse = false;
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subscription } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Riddle } from '../../_models/riddle.model';
import { RiddleService } from '../../services/riddle.service';

import {
  Form,
  NgForm,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { Level } from '../../_models/level.model';
import { LevelRiddleService } from '../../services/level-riddle.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  postResponse: string;
  numOfLevels: number = 0;
  isAddingLevel = false;

  showPostSuccess: boolean = false;
  forumSub: Subscription;
  riddle: Riddle;
  levels: Level[] = [];

  createRiddleForm: NgForm;

  constructor(
    private riddleService: RiddleService,
    private levelService: LevelRiddleService
  ) {}

  ngOnInit(): void {}

  clickedCreateRiddle(createRiddleForm: NgForm) {
    //get this elsewhere
    var riddler_id = 2;

    // const newRiddle: Riddle = new Riddle(
    //   null,
    //   createRiddleForm.controls['riddleName'].value,
    //   createRiddleForm.controls['difficulty'].value,
    //   createRiddleForm.controls['riddlePrize'].value,
    //   'Riddler name from angular session',
    //   createRiddleForm.controls['riddleDescription'].value,
    //   createRiddleForm.controls['riddleLocation'].value,
    //   riddler_id
    // );

    this.riddle = new Riddle(
      null,
      createRiddleForm.controls['riddleName'].value,
      createRiddleForm.controls['difficulty'].value,
      createRiddleForm.controls['riddlePrize'].value,
      'Riddler name from angular session',
      createRiddleForm.controls['riddleDescription'].value,
      createRiddleForm.controls['riddleLocation'].value,
      riddler_id
    );

    this.isAddingLevel = true;
    //this.riddleService.createRiddle('/Riddles', newRiddle);

    // this.forumSub = this.riddleService
    //   .postRiddle(newRiddle)
    //   .subscribe(
    //     (result) => (
    //       (this.postResponse = result.response), (this.showPostSuccess = true)
    //     )
    //   );
    createRiddleForm.reset();
  }

  clickedCreateRiddleLevel(createLevelForm: NgForm) {
    var riddle_id = 15;

    const newLevel: Level = new Level(
      this.levels.length + 1,
      createLevelForm.controls['question'].value,
      createLevelForm.controls['answer'].value
    );

    this.levels.push(newLevel);
    createLevelForm.reset();

    // this.levelService
    //   .addRiddleLevel(newLevel, riddle_id)
    //   .subscribe((result) => console.log(result));
  }
  clickedSubmitRiddle() {
    this.riddle.levels = this.levels;
    this.forumSub = this.riddleService
      .postRiddle(this.riddle)
      .subscribe(
        (result) => (
          (this.postResponse = result.response), (this.showPostSuccess = true)
        )
      );
  }

  ngOnDestroy() {
    if (this.forumSub) {
      this.forumSub.unsubscribe();
    }
  }

  // public createRiddle() {
  //   let response = this.service.newRiddle('/Riddles', this.newRiddle);
  //   response.subscribe((data) => (this.message = data));
  // }
}

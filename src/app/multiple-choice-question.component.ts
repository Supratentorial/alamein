import { Component } from '@angular/core';
import { Mcq } from './mcq'; 
import { OnInit } from '@angular/core';

@Component({
  selector: 'multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
})
export class MultipleChoiceQuestionComponent implements OnInit {
  ngOnInit() {}
  currentMcq : Mcq = {
    id: 1,
    question: "Are you hungry?"
  }

  question = 'What colour is your car?';
  question2 = 'What is your favourite food?';
}
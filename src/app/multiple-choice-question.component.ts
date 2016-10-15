import { Component } from '@angular/core';

@Component({
  selector: 'multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
})
export class MultipleChoiceQuestionComponent {
  question = 'What colour is your car?';
  question2 = 'What is your favourite food?';
}
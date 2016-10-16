import { Component } from '@angular/core';
import { Mcq } from './mcq'; 
import { OnInit } from '@angular/core';
import { McqDataService} from './mcq-data.service';

@Component({
  selector: 'multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
})
export class MultipleChoiceQuestionComponent implements OnInit {
  ngOnInit() {this.mcqdataservice.getMcqs.subscribe(this.getMcqsSuccess, this.getMcqsError)}
  
  constructor (private mcqdataservice: McqDataService) {}
  
  getMcqsError(){
    console.log("something bad happened")
  }
  getMcqsSuccess(){
    console.log("something good happened")
  }
  currentMcq : Mcq;

  question = 'What colour is your car?';
  question2 = 'What is your favourite food?';
}
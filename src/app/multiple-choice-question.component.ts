import { Component } from '@angular/core';
import { Mcq } from './mcq'; 
import { OnInit } from '@angular/core';
import { McqDataService} from './mcq-data.service';

@Component({
  selector: 'multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
})
export class MultipleChoiceQuestionComponent implements OnInit {
  ngOnInit() {
    this.mcqDataService.getNextMcqs().subscribe(
      (nextMcq) => { this.currentMcq = nextMcq },
      (error) => { console.log(error) }
    )
  }
  
  constructor (private mcqDataService: McqDataService) {}
  
  getNextMcqsError(){
    console.log("something bad happened");
  }
  getNextMcqsSuccess(nextmcq: Mcq){
    this.currentMcq = nextmcq;
  }
  currentMcq : Mcq;

  question = 'What colour is your car?';
  question2 = 'What is your favourite food?';
}
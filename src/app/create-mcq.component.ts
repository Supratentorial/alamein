import { Component } from '@angular/core';
import { Mcq } from './mcq';
import { OnInit } from '@angular/core';
import { McqDataService } from './mcq-data.service';
import { Router } from '@angular/router';

@Component({
    selector: 'create-mcq',
    templateUrl: './create-mcq.component.html',
    styleUrls: ['./create-mcq.component.scss']
})
export class CreateMcqComponent implements OnInit {

    id: Number;
    question: String;
    answer1: String;
    answer2: String;
    answer3: String;

    constructor(private mcqDataSerice: McqDataService, private router: Router) { }

    ngOnInit() {

    }

    saveNewMcq() {
        console.log("saveNewMcq method has run")
        let mcq: Mcq = {
            id: this.id,
            question: this.question,
            answer1: this.answer1,
            answer2: this.answer2,
            answer3: this.answer3
        }
        this.mcqDataSerice.saveNewMcq(mcq).subscribe((savedMcq) => {
            console.log("Save successful");
            this.router.navigate(['/']);
         }, () => { });
    }

}
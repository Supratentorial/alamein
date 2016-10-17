import { Component } from '@angular/core';
import { Mcq } from './mcq'; 
import { OnInit } from '@angular/core';
import { McqDataService} from './mcq-data.service';

@Component({
    selector: 'create-mcq',
    templateUrl: './create-mcq.component.html'
})
export class CreateMcqComponent  implements OnInit{
    ngOnInit(){
    
    }
    
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { McqDataService } from './mcq-data.service';
import { CreateMcqComponent } from './create-mcq.component';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent, MultipleChoiceQuestionComponent, CreateMcqComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: MultipleChoiceQuestionComponent },
      { path: 'view-mcq', component: MultipleChoiceQuestionComponent },
      { path: 'edit-mcq', component: CreateMcqComponent }
    ])
  ],
  providers: [McqDataService],

  bootstrap: [AppComponent]
})
export class AppModule { }

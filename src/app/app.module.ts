import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { McqDataService } from './mcq-data.service';

import { AppComponent } from './app.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent, MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [McqDataService],

  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventInformationComponent } from './event-information.component';
import { PlanComponent } from './plan/plan.component';
import { SingerComponent } from './singer/singer.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { PolyciesComponent } from './polycies/polycies.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [    
    EventInformationComponent,
    PlanComponent,
    SingerComponent,
    QuestionAnswerComponent,
    VolunteerComponent,
    PolyciesComponent]
})
export class EventInformationModule { }

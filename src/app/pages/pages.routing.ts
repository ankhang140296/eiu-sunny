import { Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { PlanComponent } from './event-information/plan/plan.component';
import { SingerComponent } from './event-information/singer/singer.component';
import { QuestionAnswerComponent } from './event-information/question-answer/question-answer.component';
import { VolunteerComponent } from './event-information/volunteer/volunteer.component';
import { PolyciesComponent } from './event-information/polycies/polycies.component';
import { NewsComponent } from './news/news.component';
import { MessageComponent } from './message/message.component';
import { PartnershipComponent } from './partnership/partnership.component';

export const PagesRoutes: Routes = [
    { path: 'activities', component: ActivitiesComponent },
    { path: 'news', component: NewsComponent },
    { path: 'message', component: MessageComponent },
    { path: 'partnership', component: PartnershipComponent }
];

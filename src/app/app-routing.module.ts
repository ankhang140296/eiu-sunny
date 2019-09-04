import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { TicketDetailComponent } from './pages/add/customer/ticket-detail/ticket-detail.component';
import { PlanComponent } from './pages/event-information/plan/plan.component';
import { SingerComponent } from './pages/event-information/singer/singer.component';
import { QuestionAnswerComponent } from './pages/event-information/question-answer/question-answer.component';
import { VolunteerComponent } from './pages/event-information/volunteer/volunteer.component';
import { PolyciesComponent } from './pages/event-information/polycies/polycies.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { NewsComponent } from './pages/news/news.component';
import { MessageComponent } from './pages/message/message.component';
import { PartnershipComponent } from './pages/partnership/partnership.component';
import { AddUserComponent } from './pages/admin/user/add-user/add-user.component';
import { EditUserComponent } from './pages/admin/user/edit-user/edit-user.component';
import { EditContentComponent } from './pages/admin/content/edit-content/edit-content.component';
import { AddContentComponent } from './pages/admin/content/add-content/add-content.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { TablesComponent } from './pages/admin/tables/tables.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  { path: 'add', component: AddComponent },
  { path: 'activities', component: ActivitiesComponent },
  {
    path: 'event-info', children: [
      { path: 'plan', component: PlanComponent },
      { path: 'singer', component: SingerComponent },
      { path: 'question-answer', component: QuestionAnswerComponent },
      { path: 'volunteer', component: VolunteerComponent },
      { path: 'polycies', component: PolyciesComponent }
    ]
  },
  { path: 'news', component: NewsComponent },
  { path: 'message', component: MessageComponent },
  { path: 'partnership', component: PartnershipComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: 'admin', component: LoginComponent
  },
  { 
    path: 'article', children: [
      { path: 'add', component: AddContentComponent },
      { path: 'edit', component: EditContentComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tables', component: TablesComponent },
  {
    path: 'user', children: [
      { path: 'add', component: AddUserComponent },
      { path: 'edit', component: EditUserComponent }
    ]
  },
  { path: 'ticket-detail', component: TicketDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

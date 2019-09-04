import { NgModule } from '@angular/core';
import { PagesRoutes } from './pages.routing';
import { ActivitiesComponent } from './activities/activities.component';
import { NewsComponent } from './news/news.component';
import { MessageComponent } from './message/message.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { NewsModule } from './news/news.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes)
  ],
  declarations: [ 
    ActivitiesComponent,
    NewsComponent,
    MessageComponent,
    PartnershipComponent
  ],
  exports: [
  RouterModule,
  NewsModule
]
})
export class PagesModule { }

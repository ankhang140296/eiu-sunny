import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { ContentsComponent } from './contents/contents.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContentsComponent
  ]
})
export class NewsModule { }

import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  articlesArray = [];
  updateSuccessfull: boolean;

  constructor(private articleService: ArticleService) { }
  public searchText: string;

  ngOnInit() {
    this.articleService.getSnapshotChanges().subscribe(
      list => {
        this.articlesArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

}

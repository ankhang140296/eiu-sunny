import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { ArticleService } from 'src/app/shared/article.service';

@Component({
  selector: 'app-edit-content',
  templateUrl: './edit-content.component.html',
  styleUrls: ['./edit-content.component.css']
})
export class EditContentComponent implements OnInit {

  articlesArray = [];
  updateSuccessfull: boolean;
  edit: boolean;
  article;
  title: string;
  description: string;
  contents;
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

  onEdit(article) {
    this.article = article;
    this.title = article.title;
    this.description = article.description;
    this.contents = article.contents;
    this.edit = true;
  }

  onSave() {
    if (confirm('Are you sure to update this record ?')) {
      this.edit = false;
      this.updateSuccessfull = true;

      this.article.title = this.title;
      this.article.description = this.description;
      this.article.contents = this.contents;
      this.articleService.updateArticle(this.article);
    }
  }

  onClose() {

    this.edit = false;
  }

  onRemove(article){
    if (confirm('Are you sure to delete this record ?')) {
      this.articleService.removeUser(article);
    }
  }

}

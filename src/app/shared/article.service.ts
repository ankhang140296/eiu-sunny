import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(private db: AngularFireDatabase) { }
  usersObservable: Observable<any[]>;

  getArticles() {
    return this.usersObservable = this.getArticlesList('/articles');
  }

  getArticlesList(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

  getSnapshotChanges(){
    return this.db.list('/articles').snapshotChanges();
  }

  addArticle(article) {
    var postsRef = this.db.database.ref("/articles");
    postsRef.push({
      title: article.title,
      description: article.description,
      date: article.date,
      contents: article.contacts
    });
  }

  updateArticle(article) {
    var articlesRef = this.db.database.ref("/articles");
    var hopperRef = articlesRef.child(article.$key);
    hopperRef.update({
      title: article.title,
      description: article.description,
      date: article.date,
      contents: article.contents
    });
  }
  removeUser(article) {
    var articlesRef = this.db.database.ref("/articles");
    var hopperRef = articlesRef.child(article.$key);
    hopperRef.remove();
  }
}

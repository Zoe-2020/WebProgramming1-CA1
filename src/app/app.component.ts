import { Component } from '@angular/core';
import { Article } from './article/article.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

articles:Article[];

constructor() {
  this.articles=[
    new Article('Angular','htttp://angular.io', 5 ),
    new Article('Google','htttp://google.ie', 3 ),
    new Article('tiktok','htttp://tictok.com', 1 )

  ];
}
  addArticle(title:HTMLInputElement, link:HTMLInputElement):Boolean {

 this.articles.push(new Article(title.value, link.value));
  title.value = '';
  link.value = '';
console.log(`Adding Article Title:${title.value}: and adding Article link:${link.value}:`);
return false;
  }

  sortedArticles(): Article[] {
     return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}



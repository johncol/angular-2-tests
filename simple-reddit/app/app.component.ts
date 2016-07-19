import { Component } from '@angular/core';
import { Article } from './models/article';
import { RedditArticleComponent } from './components/reddit-article.component';

@Component({
  selector: 'reddit-app',
  templateUrl: './../templates/reddit-app.html',
  directives: [RedditArticleComponent]
})
export class RedditApp {
	articles: Article[];

	constructor() {
		this.articles = [
			new Article('Angular 2', 'http://angular.io', 3),
			new Article('Fullstack', 'http://fullstack.io', 2),
			new Article('Angular Homepage', 'http://angular.io', 1)
		];
	}

	addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
		this.articles.push(new Article(title.value, link.value));
		title.value = '';
		link.value = '';
	}

	sortedArticles(): Article[] {
		return this.articles.sort((a1, a2) => a2.votes - a1.votes);
	}
}
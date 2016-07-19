import { Component } from '@angular/core';
import { Article } from './../models/article';

@Component({
	selector: 'reddit-article',
	templateUrl: './../../templates/reddit-article.html',
	inputs: ['article'],
	host: {
		class: 'card'
	}
})
export class RedditArticleComponent {
	article: Article;

	voteUp(): boolean {
		this.article.voteUp();
		return false;
	}

	voteDown(): boolean {
		this.article.voteDown();
		return false;
	}
}
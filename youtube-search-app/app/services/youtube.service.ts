import { Inject, Injectable, bind } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { SearchResult } from './../models/search-result';

@Injectable()
export class YoutubeService {
	constructor(private http: Http, 
				@Inject(YOUTUBE_API_KEY) private apiKey: string, 
				@Inject(YOUTUBE_API_URL) private apiUrl: string) {}

	search(query: string): Observable<SearchResult[]> {
		let queryUrl = this.buildUrl(query);
		return this.http.get(queryUrl).map((response: Response) => 
			response.json().items.map(item => {
				console.log('Raw item: ', item);
				return new SearchResult({
					id: item.id.videoId,
					title: item.snippet.title,
					description: item.snippet.description,
					thumbnailUrl: item.snippet.thumbnails.high.url
				});
			})
		);
	}

	private buildUrl(query: string): string {
		let params: string = [
			`q=${query}`,
			`key=${this.apiKey}`,
			`part=snippet`,
			`type=video`,
			`maxResults=10`
		].join('&');
		return `${this.apiUrl}&${params}`;
	}
}

let YOUTUBE_API_KEY: string = '';
let YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

export var youtubeServiceInjectables: Array<any> = [
	bind(YoutubeService).toClass(YoutubeService),
	bind(YOUTUBE_API_KEY).toValue(YOUTUBE_API_KEY),
	bind(YOUTUBE_API_URL).toValue(YOUTUBE_API_URL)
];
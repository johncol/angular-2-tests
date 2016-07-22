import { Component, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResult } from './../models/search-result';
import { YoutubeService } from './../services/youtube.service';

@Component({
	outputs: ['loading', 'results'],
	selector: 'search-box',
	template: `
		<input type="search" placeholder="Search" autofocus />
	`
})
export class SearchBoxComponent {

	loading: EventEmitter<boolean> = new EventEmitter<boolean>();
	results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

	constructor(private element: ElementRef, private service: YoutubeService) {}

	ngOninit(): void {
		Observable.fromEvent(this.element.nativeElement, 'keyup')
			.map((event: any) => event.target.value)
			.filter((query: string) => query.length > 3)
			.debounceTime(250)
			.do(() => this.loading.next(true))
			.map((query: string) => this.service.search(query))
			.switch()
			.subscribe(
				results => {
					this.results.next(results);
					this.loading.next(false);
				},
				error => {
					console.log('Error: ', error);
					this.loading.next(false);
				},
				() => {
					this.loading.next(false);
				}
			);
	}
}
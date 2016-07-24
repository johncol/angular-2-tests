import { Component } from '@angular/core';
import { SearchResult } from './../models/search-result';
import { SearchBoxComponent } from './search-box.component';
import { SearchResultComponent } from './search-result.component';

@Component({
	selector: 'youtube-search',
	directives: [SearchResultComponent, SearchBoxComponent],
	template: `
		<div class='container'>
			<div class="page-header">
			<h1 [class.loading]="loading">
				YouTube Search
			</h1>
			<div>
				<div>
					<search-box
						(loading)="loading = $event"
						(results)="updateResults($event)">
					</search-box>
				</div>
			</div>
			<div>
				<search-result
					*ngFor="let result of results"
					[result]="result">
				</search-result>
			</div>
		</div>
	`
})
export class YoutubeSearchComponent {
	results: SearchResult[];
	loading: boolean = true;

	updateResults(results: SearchResult[]): any {
		this.results = results;
	}
}
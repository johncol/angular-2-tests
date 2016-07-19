import { Component } from '@angular/core';

@Component({
	selector: 'price-display',
	inputs: ['price'],
	host: { class: 'extra'}
	template: `
		<div class="price-display">{{price | currency:'COP':true}}</div>
	`
})
export class PriceDisplayComponent {
	price: number;
}
import { Component } from '@angular/core';
import { Product } from './../models/product';

@Component({
	selector: 'product-image',
	inputs: ['product'],
	host: { class: 'image' },
	template: `
		<img class="product-image" [src]="product.imageUrl" />
	`
})
export class ProductImageComponent {
	product: Product;
}
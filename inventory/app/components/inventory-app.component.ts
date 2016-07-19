import { Component } from '@angular/core';
import { Product } from './../models/product';
import { ProductsListComponent } from './products-list.component';

@Component({
	selector: 'inventory-app',
	directives: [ProductsListComponent],
	host: { class: 'ui raised very padded text container segment'},
	template: `
		<div class="ui container">
			<products-list
				[productList]="products"
				(onProductSelected)=productWasSelected($event)>
			</products-list>
		</div>
	`
})
export class InventoryAppComponent {

	products: Product[];

	constructor() {
		this.products = [
			new Product(
				'MYSHOES', 'Black Running Shoes',
				'/assets/black-shoes.jpg',
				['Men', 'Shoes', 'Running Shoes'],
				109.99),
			new Product(
				'NEATOJACKET', 'Blue Jacket',
				'/assets/blue-jacket.jpg',
				['Women', 'Apparel', 'Jackets & Vests'],
				238.99),
			new Product(
				'NICEHAT', 'A Nice Black Hat',
				'/assets/black-hat.jpg',
				['Men', 'Accessories', 'Hats'],
				29.99)
			];
	}

	productWasSelected(product: Product): void {
		console.log('Product selected: ', product);
	}


}
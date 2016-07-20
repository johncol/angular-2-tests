import { Component } from '@angular/core';
import { Product } from './../models/product';
import { ProductsListComponent } from './products-list.component';
import { SimpleForm1Component } from './simple-form-1.component';
import { SimpleForm2Component } from './simple-form-2.component';

@Component({
	selector: 'inventory-app',
	directives: [ProductsListComponent, SimpleForm1Component, SimpleForm2Component],
	host: { class: 'ui raised very padded text container segment'},
	template: `
		<div class="ui container">
			<products-list
				[productList]="products"
				(onProductSelected)=productWasSelected($event)>
			</products-list>
			<br />
			<simple-form-2></simple-form-2>
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
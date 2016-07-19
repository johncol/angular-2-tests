import { Product } from './../models/product';
import { ProductRowComponent } from './product-row.component';
import { 
	Component,
	EventEmitter
} from '@angular/core';

@Component({
	selector: 'products-list',
	directives: [ProductRowComponent],
	inputs: ['productList'],
	outputs: ['onProductSelected'],
	host: { class: 'ui items'},
	template: `
		<product-row
			*ngFor="let product of productList"
			(click)="clicked(product)"
			[product]="product"
			[class.selected]="isSelected(product)">
		</product-row>
	`
})
export class ProductsListComponent {
	productList: Product[];
	onProductSelected: EventEmitter<Product> = new EventEmitter<Product>();
	currentProduct: Product;

	clicked(product: Product): void {
		this.currentProduct = product;
		this.onProductSelected.emit(product);
	}

	isSelected(product: Product): boolean {
		if (!this.currentProduct || !product) {
			return false;
		}
		return this.currentProduct.sku === product.sku;
	}
}
import { Component } from '@angular/core';
import { Product } from './../models/product';
import { ProductImageComponent } from './product-image.component';
import { ProductDepartmentComponent } from './product-department.component';
import { PriceDisplayComponent } from './price-display.component';

@Component({
	selector: 'product-row',
	inputs: ['product'],
	directives: [ProductImageComponent, ProductDepartmentComponent, PriceDisplayComponent],
	host: { class: 'item product' },
	template: `
		<product-image [product]="product"></product-image>
		<div class="content">
			<div class="header">{{product.name}}</div>
			<div class="meta">
				<div class="product-sku">SKU #{{product.sku}}</div>
			</div>
			<div class="description">
				<product-department [product]="product"></product-department>
			</div>
		</div>
		<price-display [price]="product.price"></price-display>
	`
})
export class ProductRowComponent {
	product: Product;
}
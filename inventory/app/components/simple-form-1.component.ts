import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

@Component({
	selector: 'simple-form-1',
	directives: [FORM_DIRECTIVES],
	template: `
		<div class="ui raised segment">
			<h2 class="ui header">Demo Form: Sku</h2>
			<form #f="ngForm"
				(ngSubmit)="onSubmit(f.value)"
				class="ui form">
					<div class="field">
						<label for="skuInput">
							SKU
							<em *ngIf="skuValue" style="font-weight: normal;">
								(value submitted {{skuValue | json}})
							</em>
						</label>
						<input type="text"
							id="skuInput"
							placeholder="SKU"
							ngControl="sku">
					</div>
					<button type="submit" class="ui button">Submit</button>
			</form>
		</div>
	`
})
export class SimpleForm1Component {
	skuValue: string;
	onSubmit(value: any): void {
		this.skuValue = value;
	}
}
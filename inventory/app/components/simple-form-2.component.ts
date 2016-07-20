import { Component } from '@angular/core';
import { 
	FORM_DIRECTIVES,
	CORE_DIRECTIVES,
	ControlGroup,
	FormBuilder,
	AbstractControl,
	Validators,
} from '@angular/common';

@Component({
	selector: 'simple-form-2',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	template: `
		<div class="ui raised segment">
			<h2 class="ui header">Demo Form: Sku</h2>
			<form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm)" class="ui form">
				<div class="field">
					<label for="skuInput">SKU</label>
					<input type="text"
						id="skuInput"
						placeholder="SKU"
						[ngFormControl]="myForm.controls['sku']">
					<div class="ui error message" *ngIf="sku.touched && !sku.valid">SKU is invalid</div>
					<div class="ui error message" *ngIf="sku.touched && sku.hasError('required')">SKU is required</div>
				</div>
				<div class="ui error message" *ngIf="myForm.dirty && !myForm.valid">Form is invalid</div>
				<button type="submit" class="ui button">Submit</button>
			</form>
		</div>
	`
})
export class SimpleForm2Component {
	myForm: ControlGroup;
	sku: AbstractControl;

	constructor(formBuilder: FormBuilder) {
		this.myForm = formBuilder.group({
			sku: ['', Validators.required]
		});
		this.sku = this.myForm.controls['sku'];
	}

	onSubmit(form: any): void {
		if (form.valid) {
			console.log('is valid: ', form.value);
		}
		
	}
}
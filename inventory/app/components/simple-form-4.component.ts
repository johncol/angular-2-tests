import { Component } from '@angular/core';
import { 
	FORM_DIRECTIVES,
	CORE_DIRECTIVES,
	ControlGroup,
	FormBuilder,
	AbstractControl,
	Validators,
	Control
} from '@angular/common';

@Component({
	selector: 'simple-form-4',
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
	template: `
		<div class="ui raised segment">
			<h2 class="ui header">Demo Form: Sku</h2>
			<form [ngFormModel]="myForm" (ngSubmit)="onSubmit(myForm)" class="ui form">
				<div class="ui error message" *ngIf="myForm.dirty && !myForm.valid">Form is invalid</div>
				<div class="field" [class.error]="myForm.find('sku').touched && !myForm.find('sku').valid">
					<label for="skuInput">SKU</label>
					<input type="text"
						id="skuInput"
						placeholder="SKU"
						autocomplete="off"
						#sku="ngForm"
						[ngFormControl]="myForm.controls['sku']">
					<div class="ui error message" *ngIf="sku.control.touched && !sku.control.valid">
						SKU is invalid:
						<span *ngIf="sku.control.touched && sku.control.hasError('required')">
							<br /> - SKU is required
						</span>
						<span *ngIf="sku.control.touched && sku.control.hasError('startWith123')">
							<br /> - SKU must start with 123
						</span>
					</div>
				</div>
				<button type="submit" class="ui button">Submit</button>
			</form>
		</div>
	`
})
export class SimpleForm4Component {
	myForm: ControlGroup;

	constructor(formBuilder: FormBuilder) {
		this.myForm = formBuilder.group({
			sku: ['', Validators.compose([
					Validators.required, 
					CustomValidators.startWith123
				])]
		});

		this.myForm.valueChanges
			.subscribe(newVal => console.log(" new form value: ", newVal));

		this.myForm.controls['sku'].valueChanges
			.subscribe(newVal => console.log(" new sku value: ", newVal));
	}

	onSubmit(form: any): void {
		if (form.valid) {
			console.log('is valid: ', form.value);
		}
	}
}

class CustomValidators {
	static startWith123(control: Control): {[s: string]: boolean} {
		return !control.value.match(/^123/) ? { 'startWith123': true } : null;
	}
}
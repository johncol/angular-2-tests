import { Component } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { 
	REACTIVE_FORM_DIRECTIVES,
	FormBuilder,
	FormGroup,
	AbstractControl,
	Validators,
} from '@angular/forms';

@Component({
	templateUrl: './app/components/login.html',
	directives: [REACTIVE_FORM_DIRECTIVES]
})
export class LoginComponent {

	form: FormGroup;
	user: AbstractControl;
	password: AbstractControl;

	failedLogin: boolean = false;
	formSubmitted: boolean = false;

	constructor(private authService: AuthService, private formBuilder: FormBuilder) {}

	ngOnInit() {
		this.form = this.formBuilder.group({
			user: ['', Validators.required],
			password: ['', Validators.required],
		});
		this.user = this.form.controls['user'];
		this.password = this.form.controls['password'];
	}

	login(): void {
		this.formSubmitted = true;
		if (this.form.valid) {
			let success: boolean = this.authService.login(this.user.value, this.password.value);
			if (!success) {
				this.failedLogin = true;
				setTimeout(() => this.failedLogin = false, 3000);
			}
		}
	}

}
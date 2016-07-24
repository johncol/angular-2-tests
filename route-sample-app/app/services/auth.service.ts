import { Injectable, provide } from '@angular/core';

@Injectable()
export class AuthService {
	
	private userAllowed: string = 'john';
	private password: string = 'passss';
	
	login(user: string, password: string): boolean {
		if (this.userAllowed === user && this.password === password) {
			localStorage.setItem('user', user);
			return true;
		}
		return false;
	}

	logout(): void {
		localStorage.removeItem('user');
	}

	getUser(): string {
		return localStorage.getItem('user');
	}

	isLogged(): boolean {
		return this.getUser() !== null;
	}

}

export const AUTH_PROVIDERS: any[] = [provide(AuthService, {useClass: AuthService})];
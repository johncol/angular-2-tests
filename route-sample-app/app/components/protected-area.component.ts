import { Component } from '@angular/core';
import { CanActivate } from '@angular/router';

@Component({
	template: '<h1>This is a restricted area avaliable only for authenticated users</h1>'
})
export class ProtectedAreaComponent {}
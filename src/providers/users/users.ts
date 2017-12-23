import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../../models/user/user';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class UsersProvider {

  	private users:User[] = []

  	constructor(public http: HttpClient) {

  	}

  	get () {
  		return this.users;
  	}

  	set (users: User[]) {
  		this.users = users;
  	}

  }

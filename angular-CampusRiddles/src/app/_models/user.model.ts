import {Role} from './role';

export class User {
    id: number;
    role: Role;
    username: string;
    firstName: string; 
    lastName: string;
    name: string;
    email: string;
    password: string;
    token?: string;

    constructor(email : string, password: string){
        this.email = email;
        this.password = password;
    }

    setName(name: string){
        this.name = name;
    }

}
export class User{
    name: string;
    email: string;
    password: string;

    constructor(email : string ,password: string){
        this.email = email;
        this.password = password;
    }

    setName(name: string){
        this.name = name;
    }

}
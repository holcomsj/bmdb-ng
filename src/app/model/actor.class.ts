export class Actor {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    birthdate: number;

    constructor(id: number = null, firstName: string = '', lastName: string = '',
            gender: string = '', birthdate: number = Date.now()){

                this.id = id;
                this.firstName = firstName;
                this.lastName = lastName;
                this.gender = gender;
                this.birthdate = birthdate;
            }
}

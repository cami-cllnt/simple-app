export class UserDTO {
    constructor(
      public name: string,
      public lastname: string,
      public username: string,
      public email: string,
      public password: string,
      public id?: number
      ){}
  }
  
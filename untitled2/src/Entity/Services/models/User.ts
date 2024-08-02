

export interface User {
  Id: number;
  userName: string;
  email: string;
  userGroups: UserGroup[];
}

export interface UserGroup {
  idGroup: string;
  groupName: string;
}

export interface CountUsers {
  count: number;
}

export class ModelAddUser {
  userName: string;
  email: string;
  IdGroups: number[] | undefined;

  constructor(nameUser: string, email: string, group: number[] | undefined) {
    this.userName = nameUser;
    this.email = email;
    this.IdGroups = group;
  }
}


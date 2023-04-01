import { UserRoleEnum } from "./user-role.enum";

export interface User {
  _id?: string;
  email: string;
  city: string;
  passwordHash: string;
  firstname: string;
  lastname: string;
  dateBirth: Date;
  avatar: string;
  registrationDate: Date;
  personalInformation: string;
  role: UserRoleEnum;
}

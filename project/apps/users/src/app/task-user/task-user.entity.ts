import { User, UserRoleEnum } from "@project/shared/app-types";
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './task-user.constant';

export class TaskUserEntity implements User {
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

  constructor(taskUser: User) {
    this.fillEntity(taskUser);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(taskUser: User) {
    this._id = taskUser._id;
    this.email = taskUser.email;
    this.city = taskUser.city;
    this.passwordHash = taskUser.passwordHash;
    this.firstname = taskUser.firstname;
    this.lastname = taskUser.lastname;
    this.dateBirth = taskUser.dateBirth;
    this.avatar = taskUser.avatar;
    this.registrationDate = taskUser.registrationDate;
    this.personalInformation = taskUser.personalInformation;
    this.role = taskUser.role;
  }

  public async setPassword(password: string):
    Promise<TaskUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }
  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}

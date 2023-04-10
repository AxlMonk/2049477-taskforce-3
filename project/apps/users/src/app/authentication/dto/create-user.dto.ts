import { UserRoleEnum } from "@project/shared/app-types";
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  public email: string;
  public avatar: string;

  @ApiProperty({
  description: 'User city',
  example: 'Gorod'
  })
  public city: string;
  public role: UserRoleEnum;

  @ApiProperty({
    description: 'User birth date',
    example: '1988-11-12',
  })
  public dateBirth: string;

  @ApiProperty({
    description: 'User first name',
    example: 'Bob',
  })
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Ivanov'
  })
  public lastname: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  public password: string;
}

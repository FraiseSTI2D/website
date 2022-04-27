import { IsString, MinLength, IsEmail } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @MinLength(4, {
    message: '"username" is too short'
  })
  username: string

  @IsString()
  @IsEmail()
  email: string

  @IsString()
  @MinLength(5, {
    message: '"password" is too short'
  })
  password: string
}

import { IsString, MinLength, IsEmail } from 'class-validator'

export class UpdateUserDto {
  @IsString()
  @MinLength(4, {
    message: '"username" is too short'
  })
  username: string
  
  @IsString()
  @IsEmail()
  email: string
}
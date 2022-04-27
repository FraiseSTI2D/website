import {
  Controller,
  Inject,
  Get,
  Post,
  UseGuards,
  Req,
  Body
} from '@nestjs/common'
import { IAuthService } from '../interfaces'
import { LocalAuthGuard } from '../guards'
import { Services } from '@utils/constants'
import { PrismaService } from '@modules/prisma/prisma.service'
import { Request } from 'express'
import { JwtAuthGuard } from '../guards/jwt-auth.guard'
import { CreateUserDto } from '@modules/users'

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(Services.Auth) private readonly authService: IAuthService,
    @Inject(Services.Prisma) private readonly prisma: PrismaService
  ) {}

  @Post('/register')
  async register(@Body() data: CreateUserDto) {
    return await this.authService.register(data)
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Req() req: Request) {
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request) {
    return req.user
  }
}

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as session from 'express-session'
import * as passport from 'passport'
import * as compression from 'compression'
import { ValidationPipe } from '@nestjs/common'
import dotenv from 'dotenv'
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: ['*'],
    credentials: true
  })
  app.use(compression())
  app.use(
    session({
      secret: process.env.SECRET_SESSION,
      resave: true,
      saveUninitialized: true,
      cookie: {
        maxAge: 60000 * 60 * 24
      }
    })
  )
  app.use(passport.initialize())
  app.use(passport.session())
  await app.listen(process.env.PORT)
}
bootstrap()

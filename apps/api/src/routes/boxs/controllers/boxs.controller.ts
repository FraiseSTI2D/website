import {
  Controller,
  Inject,
  Get,
  UseGuards,
  Param,
  ParseIntPipe,
  Delete,
  Put,
  Body,
  Post
} from '@nestjs/common'
import { IBoxsService } from '../interfaces'
import { JwtAuthGuard } from '~/routes/auth/guards'
import { Prisma } from '@prisma/client'
import { Services } from '@utils/constants'

@Controller('boxs')
export class BoxsController {
  constructor(
    @Inject(Services.Box) private readonly boxsService: IBoxsService
  ) {}

  @Get()
  async getBoxs() {
    return await this.boxsService.find()
  }

  @Get('random')
  async getRandomBox() {
    return await this.boxsService.random()
  }

  @Get(':id')
  async getBox(@Param('id', ParseIntPipe) id: number) {
    return await this.boxsService.findOne(id)
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createBox(@Body() data: Prisma.BoxUncheckedCreateInput) {
    return await this.boxsService.create(data)
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async updateBox(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.BoxUncheckedUpdateInput
  ) {
    return await this.boxsService.update(id, data)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async deleteBox(@Param('id', ParseIntPipe) id: number) {
    return await this.boxsService.delete(id)
  }
}

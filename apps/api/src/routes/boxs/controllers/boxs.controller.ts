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

@UseGuards(JwtAuthGuard)
@Controller('boxs')
export class BoxsController {
  constructor(
    @Inject(Services.Box) private readonly boxsService: IBoxsService
  ) {}

  @Get()
  async getBoxs() {
    return await this.boxsService.find()
  }

  @Post()
  async createBox(@Body() data: Prisma.BoxUncheckedCreateInput) {
    return await this.boxsService.create(data)
  }

  @Get(':id')
  async getBox(@Param('id', ParseIntPipe) id: number) {
    return await this.boxsService.findOne(id)
  }

  @Put(':id')
  async updateBox(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: Prisma.BoxUncheckedUpdateInput
  ) {
    return await this.boxsService.update(id, data)
  }

  @Delete(':id')
  async deleteBox(@Param('id', ParseIntPipe) id: number) {
    return await this.boxsService.delete(id)
  }
}

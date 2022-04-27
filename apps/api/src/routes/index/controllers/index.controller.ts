import { Controller, Inject, Get } from '@nestjs/common'
import { Services } from '@utils/constants'
import { IIndexService } from '../interfaces'

@Controller()
export class IndexController {
  constructor(
    @Inject(Services.Index) private readonly indexService: IIndexService
  ) {}

  @Get('/stats')
  async getStats() {
    return await this.indexService.stats()
  }
}

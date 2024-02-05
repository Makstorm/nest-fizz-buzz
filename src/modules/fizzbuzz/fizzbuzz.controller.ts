import {
  CreateRuleDto,
  FizzbuzzServiceTag,
  GetFizzBuzzDto,
  IFizzbuzzService,
} from '@domain';
import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('FizzBuzz')
@Controller('fizzbuzz')
export class FizzbuzzController {
  @Inject(FizzbuzzServiceTag) private readonly service: IFizzbuzzService;

  @ApiResponse({
    type: [String],
    description: 'Endpoint fo getting FizzBuzz rules result',
  })
  @Get()
  public async getFizzBuzz(@Query() dto: GetFizzBuzzDto): Promise<string[]> {
    return await this.service.getFizzBuzz(dto.n);
  }

  @ApiResponse({
    description: 'Endpoint fo define new fizz-buzz rule',
  })
  @Post()
  public async createRule(@Body() dto: CreateRuleDto): Promise<void> {
    return await this.service.createRule(dto);
  }
}

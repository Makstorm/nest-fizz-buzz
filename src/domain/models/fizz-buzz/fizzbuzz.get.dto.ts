import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';
import { randomInt } from 'crypto';

export class GetFizzBuzzDto {
  @IsPositive()
  @IsNumber()
  @ApiProperty({
    type: Number,
    description: 'Top number for FizzBuzz',
    example: randomInt(10),
  })
  public n: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { randomInt } from 'crypto';

export class CreateRuleDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty({
    type: Number,
    description: 'Numder to trigger new rule for FizzBuzz',
    example: randomInt(10),
  })
  public divideTrigger: number;

  @IsString()
  @ApiProperty({
    type: String,
    description: 'String whitch will be added when rule is triggered',
    example: 'Fuzz',
  })
  public returnString: string;
}

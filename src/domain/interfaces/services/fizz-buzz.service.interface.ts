import { CreateRuleDto } from '@domain';

export interface IFizzbuzzService {
  createRule(dto: CreateRuleDto): Promise<void>;
  getFizzBuzz(n: number): Promise<string[]>;
}

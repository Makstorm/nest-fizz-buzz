import { CreateRuleDto, IFizzbuzzService, Rule } from '@domain';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FizzbuzzService implements IFizzbuzzService {
  private rules: Rule[] = [];

  //Через конструктор назначаэмо початковы правила
  public constructor() {
    this.addRule({
      match: (number) => number % 3 === 0 && number % 5 === 0,
      apply: () => 'FizzBuzz',
    });
    this.addRule({
      match: (number) => number % 3 === 0,
      apply: () => 'Fizz',
    });
    this.addRule({
      match: (number) => number % 5 === 0,
      apply: () => 'Buzz',
    });
  }

  //Додавання нових правил
  public async createRule(dto: CreateRuleDto): Promise<void> {
    this.addRule({
      match: (number) => number % dto.divideTrigger === 0,
      apply: () => dto.returnString,
    });
  }

  //Додавання нових правил у список
  private addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  //Запуск перебору правил та повернення результату
  public async getFizzBuzz(n: number): Promise<string[]> {
    if (!n) {
      throw new BadRequestException('Missing credentials');
    }

    const res: string[] = [];

    for (let i = 1; i <= n; i++) {
      const rule = this.rules.find((rule) => rule.match(i));
      if (rule) {
        res.push(rule.apply());
      } else {
        res.push(i.toString());
      }
    }

    return res;
  }
}

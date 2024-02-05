export interface Rule {
  match(number: number): boolean;
  apply(): string;
}

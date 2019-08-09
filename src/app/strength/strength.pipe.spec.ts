import { StrengthPipe } from './strength.pipe';

describe('StrenghtPipe', () => {
  it('should display weak if strength is 5', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)');
  });

  it('should display strong if strength is 11', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(11)).toEqual('11 (strong)');
  });
});

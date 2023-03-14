import * as utils from './utils';

describe('utils tests', () => {
  it('should format price correctly', () => {
    jest.spyOn(utils, 'formatPrice');

    expect(utils.formatPrice(2781)).toContain('2.781,00');
  });
});

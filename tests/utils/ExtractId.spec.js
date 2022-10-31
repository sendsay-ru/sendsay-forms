import { extractId } from '../../src/utils';

describe('ExtractId', () => {
  it('Should extract simple logins', () => {
    expect(extractId('https://sendsay.ru/form/x_1647957072928694/2').id).toEqual(
      'x_1647957072928694-2'
    );
    expect(extractId('https://sendsay.ru/form/x_1647957072928694/2/').id).toEqual(
      'x_1647957072928694-2'
    );
    expect(extractId('https://sendsay.ru/form/x_1649937593465053/50').id).toEqual(
      'x_1649937593465053-50'
    );
    expect(extractId('https://sendsay.ru/form/x_1649937593465053/50/').id).toEqual(
      'x_1649937593465053-50'
    );
  });

  it('Should extract custom logins', () => {
    expect(extractId('https://sendsay.ru/form/codeception/484').id).toEqual('codeception-484');
    expect(extractId('https://sendsay.ru/form/codeception/484/').id).toEqual('codeception-484');
    expect(extractId('https://api.sendsay.ru/form/xeliusestate/1').id).toEqual('xeliusestate-1');
    expect(extractId('https://api.sendsay.ru/form/xeliusestate/1/').id).toEqual('xeliusestate-1');
  });

  it('Should extract login from empty string', () => {
    expect(extractId('https://sendsay.ru/form/codeception/').id).toEqual('form-codeception');
    expect(extractId('https://sendsay.ru/form').id).toEqual('sendsay.ru-form');
    expect(extractId('https://sendsay.ru/').id).toEqual('');
    expect(extractId('test').id).toEqual('');
  });
});

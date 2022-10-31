import { extractId } from '../../src/utils';

describe('ExtractId', () => {
  it('Should extract simple logins', () => {
    expect(extractId('https://sendsay.ru/form/x_1647957072928694/2').id).toEqual(
      'x_1647957072928694-2'
    );
    expect(extractId('http://sendsay.ru/form/x_1647957072928694/2/').id).toEqual(
      'x_1647957072928694-2'
    );
    expect(extractId('//sendsay.ru/form/x_1647957072928694/3/').id).toEqual('x_1647957072928694-3');
    expect(extractId('sendsay.ru/form/x_1647957072928694/4/').id).toEqual('x_1647957072928694-4');
    expect(extractId('https://sendsay.ru/form/x_1649937/50')).toEqual({
      login: 'x_1649937',
      formId: '50',
      id: 'x_1649937-50',
    });
    expect(extractId('https://yandex.ru/forms/x_1649937593465053/50/').id).toEqual(
      'x_1649937593465053-50'
    );
  });

  it('Should extract custom logins', () => {
    expect(extractId('ws://sendsay.ru/form/codeception/484').id).toEqual('codeception-484');
    expect(extractId('http://sendsay.ru/form/codeception/484/').id).toEqual('codeception-484');
    expect(extractId('ftp://api.sendsay.ru/form/xeliusestate/1').id).toEqual('xeliusestate-1');
    expect(extractId('https://sendsay.ru/form/xeliusestate/2/')).toEqual({
      login: 'xeliusestate',
      formId: '2',
      id: 'xeliusestate-2',
    });
    expect(extractId('http://sendsay.ru/form/xeliusestate/3/').id).toEqual('xeliusestate-3');
    expect(extractId('//sendsay.ru/form/xeliusestate/4/').id).toEqual('xeliusestate-4');
    expect(extractId('sendsay.ru/form/xeliusestate/5/').id).toEqual('xeliusestate-5');
  });

  it('Should extract login from empty string', () => {
    expect(extractId('https://sendsay.ru/form/codeception/').id).toEqual('form-codeception');
    expect(extractId('https://sendsay.ru/form').id).toEqual('sendsay.ru-form');
    expect(extractId('https://sendsay.ru/')).toEqual({
      login: '',
      formId: '',
      id: '',
    });
    expect(extractId('ws://sendsay.ru/')).toEqual({
      login: '',
      formId: '',
      id: '',
    });
    expect(extractId('test').id).toEqual('');
    expect(extractId('').id).toEqual('');
  });
});

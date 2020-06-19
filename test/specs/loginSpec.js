const helper = require('../../test_helper.js');
describe('Failed Login', () => {
  it('Remains on login page', () => {
    helper.fillUsersTable(
      'Jack',
      'Perrin',
      'jack@makers.com',
      'Pezzer',
      'LTFC'
    );
    browser.url('/login');
    const username = $('#username');
    const password = $('#password');
    username.setValue('MileyCyrus');
    password.setValue('molly1234');
    const mybutton = $('#button');
    mybutton.click();
    var url = browser.getUrl();
    console.log('url');
    expect(browser).toHaveUrl('http://localhost:3000/login');
  });
});

describe('Successful login', () => {
  it('Moves onto spaces Page', () => {
    helper.fillUsersTable(
      'jack',
      'Perrin',
      'jack@makers.com',
      'Pezzer101',
      'LutonTownFC'
    );
    browser.url('/login');
    const username = $('#username');
    const password = $('#password');
    username.setValue('Pezzer101'); // fill in username and password fields.
    password.setValue('LutonTownFC');
    const mybutton = $('#button');
    mybutton.click();
    expect(browser).toHaveUrl('http://localhost:3000/spaces');
  });
});

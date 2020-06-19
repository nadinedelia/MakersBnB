describe('Spaces Page', () => {
  it('goes to new space form page', () => {
    browser.url('/spaces');
    const newSpacesButton = $('#button');
    newSpacesButton.click();
    expect(browser).toHaveUrl('http://localhost:3000/newSpace?');
  });
});

describe('New Space Page', () => {
  it('', () => {
    browser.url('/newSpace?');
    const name = $('#name');
    const description = $('#description');
    const price = $('#price');
    const date = $('#date');
    name.setValue('Cottage 1'); // fill in username and password fields.
    description.setValue('Lovely cottage in cornwall');
    price.setValue('0.01');
    date.setValue('13');
    const listSpaceButton = $('#button');
    listSpaceButton.click();
    expect(browser).toHaveUrl('http://localhost:3000/spaces');
  });
});

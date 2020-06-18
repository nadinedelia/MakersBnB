process.env.DB_NAME = test;
describe('Spaces Page', () => {
  it('goes to new space form page', () => {
    browser.url('/spaces');
    const newSpacesButton = $('#button');
    newSpacesButton.click();
    expect(browser).toHaveUrl('http://localhost:3000/newSpace?');
  });
});

describe('New Space Page', () => {
  xit('', () => {
    browser.url('/newSpace?');
    const name = $('#name');
    const description = $('#description');
    const price = $('#price');
    name.setValue('Cottage 1'); // fill in username and password fields.
    description.setValue('Lovely cottage in cornwall');
    price.setValue('0.01');
    const listSpaceButton = $('#button');
    listSpaceButton.click();
    const listingText = $('<p />');
    expect(listingText).toHaveText(
      'Next-gen browser and mobile automation test framework for Node.js'
    );
    expect(browser).toHaveUrl('http://localhost:3000/spaces');
  });
});

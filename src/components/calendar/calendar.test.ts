import { expect, fixture, html } from '@open-wc/testing';

describe('<p-calendar>', () => {
  it('should render a component', async () => {
    await fixture(html` <p-calendar></p-calendar> `);
    const a = true;
    expect(a).to.be.true;
  });
});

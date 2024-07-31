import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<p-mutation-observer>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <p-mutation-observer></p-mutation-observer> `);

    expect(el).to.exist;
  });
});

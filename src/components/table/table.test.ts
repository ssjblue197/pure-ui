import '../../../dist/pure-ui.js';
import { expect, fixture, html } from '@open-wc/testing';

describe('<p-table>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <p-table></p-table> `);

    expect(el).to.exist;
  });
});

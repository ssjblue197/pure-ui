import '../../../dist/pure-ui.js';
import { expect, fixture, html } from '@open-wc/testing';
import type PMenuLabel from './menu-label.js';

describe('<p-menu-label>', () => {
  it('passes accessibility test', async () => {
    const el = await fixture<PMenuLabel>(html` <p-menu-label>Test</p-menu-label> `);
    await expect(el).to.be.accessible();
  });
});

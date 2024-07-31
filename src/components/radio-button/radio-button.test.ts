import '../../../dist/shoelace.js';
import { expect, fixture, html } from '@open-wc/testing';
import type PRadioButton from './radio-button.js';
import type PRadioGroup from '../radio-group/radio-group.js';

describe('<p-radio-button>', () => {
  it('should not get checked when disabled', async () => {
    const radioGroup = await fixture<PRadioGroup>(html`
      <p-radio-group value="1">
        <p-radio-button id="radio-1" value="1"></p-radio-button>
        <p-radio-button id="radio-2" value="2" disabled></p-radio-button>
      </p-radio-group>
    `);
    const radio1 = radioGroup.querySelector<PRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<PRadioButton>('#radio-2')!;

    radio2.click();
    await Promise.all([radio1.updateComplete, radio2.updateComplete]);

    expect(radio1.checked).to.be.true;
    expect(radio2.checked).to.be.false;
  });

  it('should receive positional data attributes from <p-button-group>', async () => {
    const radioGroup = await fixture<PRadioGroup>(html`
      <p-radio-group value="1">
        <p-radio-button id="radio-1" value="1"></p-radio-button>
        <p-radio-button id="radio-2" value="2"></p-radio-button>
        <p-radio-button id="radio-3" value="3"></p-radio-button>
      </p-radio-group>
    `);
    const radio1 = radioGroup.querySelector<PRadioButton>('#radio-1')!;
    const radio2 = radioGroup.querySelector<PRadioButton>('#radio-2')!;
    const radio3 = radioGroup.querySelector<PRadioButton>('#radio-3')!;

    await Promise.all([radioGroup.updateComplete, radio1.updateComplete, radio2.updateComplete, radio3.updateComplete]);

    expect(radio1).to.have.attribute('data-p-button-group__button');
    expect(radio1).to.have.attribute('data-p-button-group__button--first');
    expect(radio2).to.have.attribute('data-p-button-group__button');
    expect(radio2).to.have.attribute('data-p-button-group__button--inner');
    expect(radio3).to.have.attribute('data-p-button-group__button');
    expect(radio3).to.have.attribute('data-p-button-group__button--last');
  });
});

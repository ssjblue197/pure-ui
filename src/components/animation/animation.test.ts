import "../../../dist/pure-ui.js";
import { aTimeout, expect, fixture, oneEvent } from "@open-wc/testing";
import { html } from "lit";
import type PAnimation from "./animation.js";

describe("<p-animation>", () => {
  const boxToAnimate = html`<div
    style="width: 10px; height: 10px;"
    data-testid="animated-box"
  ></div>`;

  it("renders", async () => {
    const animationContainer = await fixture<PAnimation>(
      html`<p-animation>${boxToAnimate}</p-animation>`,
    );

    expect(animationContainer).to.exist;
  });

  it("is accessible", async () => {
    const animationContainer = await fixture<PAnimation>(
      html`<p-animation>${boxToAnimate}</p-animation>`,
    );

    await expect(animationContainer).to.be.accessible();
  });

  describe("animation start", () => {
    it("does not start the animation by default", async () => {
      const animationContainer = await fixture<PAnimation>(
        html`<p-animation name="bounce" easing="ease-in-out" duration="10"
          >${boxToAnimate}</p-animation
        >`,
      );
      await aTimeout(0);

      expect(animationContainer.play).to.be.false;
    });

    it("emits the correct event on animation start", async () => {
      const animationContainer = await fixture<PAnimation>(
        html`<p-animation name="bounce" easing="ease-in-out" duration="10"
          >${boxToAnimate}</p-animation
        >`,
      );

      const startPromise = oneEvent(animationContainer, "p-start");
      animationContainer.play = true;
      return startPromise;
    });
  });

  it("emits the correct event on animation end", async () => {
    const animationContainer = await fixture<PAnimation>(
      html`<p-animation name="bounce" easing="ease-in-out" duration="1"
        >${boxToAnimate}</p-animation
      >`,
    );

    const endPromise = oneEvent(animationContainer, "p-finish");
    animationContainer.iterations = 1;
    animationContainer.play = true;
    return endPromise;
  });

  it("can be finished by hand", async () => {
    const animationContainer = await fixture<PAnimation>(
      html`<p-animation name="bounce" easing="ease-in-out" duration="1000"
        >${boxToAnimate}</p-animation
      >`,
    );

    const endPromise = oneEvent(animationContainer, "p-finish");
    animationContainer.iterations = 1;
    animationContainer.play = true;

    await aTimeout(0);

    animationContainer.finish();
    return endPromise;
  });

  it("can be cancelled", async () => {
    const animationContainer = await fixture<PAnimation>(
      html`<p-animation name="bounce" easing="ease-in-out" duration="1"
        >${boxToAnimate}</p-animation
      >`,
    );
    let animationHasFinished = false;
    oneEvent(animationContainer, "p-finish").then(
      () => (animationHasFinished = true),
    );
    const cancelPromise = oneEvent(animationContainer, "p-cancel");
    animationContainer.play = true;

    await aTimeout(0);
    animationContainer.cancel();

    await cancelPromise;
    expect(animationHasFinished).to.be.false;
  });
});

import { scale, randomRange } from 'Utils/Utils';
import * as PIXI from 'pixi.js';


export default class Particle {
  constructor(texture, application, options) {
    this.sprite = new PIXI.Sprite(texture);
    this.application = application;
    this.options = options;

    this.birthDate = undefined;
    this.recycle();

    // Initialization
    this.sprite.anchor.set(0, 1);
    this.application.stage.addChild(this.sprite);
    this.application.ticker.add(this.step.bind(this));
  }


  recycle() {
    const parentVelocity = this.options.parent.velocity;

    // Reset Particle
    this.birthDate = Number(new Date());
    this.velocity = [ -(parentVelocity.x) / 100, -(parentVelocity.y) / 100 ];
    this.lifetime = randomRange(this.options.minDecay, this.options.maxDecay, 0);
    this.elapsed = 0;

    // Reset Sprite
    this.sprite.scale.set(this.options.startScale);
    this.sprite.alpha = 0;
    this.sprite.tint = this.options.startColor;
    this.sprite.rotation = randomRange(-10, 10, 0) * Math.PI / 180;

    let ratio = randomRange(0.5, 1, 2);
    let interpolatedPosition = this.options.parent.interpolate(ratio, 1.25);

    this.sprite.x = interpolatedPosition.x + 2;
    this.sprite.y = interpolatedPosition.y;
  }


  step() {
    this.elapsed += this.application.ticker.elapsedMS;

    if (this.elapsed >= this.lifetime) {
      this.recycle();
    } else {
      const percentage = (this.elapsed / this.lifetime);

      let scaledSize = scale(this.options.startScale, this.options.endScale, percentage, false);
      this.sprite.scale.set(scaledSize);

      this.sprite.x += this.velocity[0];
      this.sprite.y += this.velocity[1];

      let scaledPercentage = scale(0, 3.14, percentage, false);
      let rawAlpha = Math.sin(scaledPercentage);
      let scaledAlpha = scale(0, 0.15, rawAlpha, false);

      this.sprite.alpha = scaledAlpha;

      this.sprite.tint = this.options.gradientGenerator(percentage);
    }
  }
}

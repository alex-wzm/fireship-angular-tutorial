import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      New coin flip every {{ nSeconds }} seconds: {{ headsOrTails }}
    </p>
  `,
  styles: [
  ],
})
export class SquareComponent {

  headsOrTails
  nSeconds = 3

  constructor() {
    setInterval(() => this.headsOrTails = Math.random() > 0.5 ? 'HEADS' : 'TAILS', this.nSeconds*1000)
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      Refresh to flip a coin: {{ headsOrTails }}
    </p>
  `,
  styles: [
  ],
})
export class SquareComponent {

  headsOrTails = Math.random() > 0.5 ? 'HEADS' : 'TAILS'

}

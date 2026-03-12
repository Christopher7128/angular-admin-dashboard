import { Component } from '@angular/core';
import { trigger, transition, style, query, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [

    trigger('routeAnimations', [

  transition('* <=> *', [

    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%'
      })
    ], { optional: true }),

    group([

      // Leaving page
      query(':leave', [
        animate('200ms ease',
          style({
            opacity: 0,
            transform: 'translateY(-20px)'   // move up
          })
        )
      ], { optional: true }),

      // Entering page
      query(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(20px)'     // start from bottom
        }),
        animate('250ms ease',
          style({
            opacity: 1,
            transform: 'translateY(0)'
          })
        )
      ], { optional: true })

    ])

  ])

])
  ]
})
export class AppComponent {

  title = 'portFolio';

  prepareRoute(outlet: any) {
    return outlet?.activatedRouteData?.['animation'];
  }

}
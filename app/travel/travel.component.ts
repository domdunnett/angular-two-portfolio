import { Component } from '@angular/core';

import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'travel',
  templateUrl: 'app/travel/travel.component.html',
  styleUrls: ['app/travel/travel.component.css']
})

export class TravelComponent {
  constructor(
    private router: Router
  ) {};
}

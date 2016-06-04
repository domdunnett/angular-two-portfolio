import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'about',
  templateUrl: 'app/about/about.component.html',
  styleUrls: ['app/about/about.component.css']
})

export class AboutComponent {
  
  constructor(
    private router: Router
  ) {};

  ngOnInit() {}
}

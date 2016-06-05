import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router-deprecated';

import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  selector: 'about',
  templateUrl: 'app/about/about.component.html',
  styleUrls: ['app/about/about.component.css'],
  directives:[MdIcon],
  providers: [MdIconRegistry]
})

export class AboutComponent {

  constructor(
    private router: Router
  ) {};

  ngOnInit() {}
}

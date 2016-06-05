import { Component } from '@angular/core';

import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'contact',
  templateUrl: 'app/contact/contact.component.html',
  styleUrls: ['app/contact/contact.component.css']
})

export class ContactComponent {
  constructor(
    private router: Router
  ) {};
}

// Components
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

@Component({
  selector: 'tech',
  templateUrl: 'app/tech/tech.component.html',
  styleUrls: ['app/tech/tech.component.css'],
  directives: []
})

export class TechComponent implements OnInit {
  title = 'Tech';

  constructor(
    private router: Router
  ) {};

  ngOnInit() {};
}

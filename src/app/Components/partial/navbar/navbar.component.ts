import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  homepage: boolean;

  constructor(router: Router) {
    router.events.subscribe(val => {
      if (router.url === '/') {
        this.homepage = true;
      } else {
        this.homepage = false;
      }
    });
  }

  ngOnInit(): void {
  }

}

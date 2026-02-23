import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>()

  constructor(public router: Router) { }

  ngOnInit(): void {


  }

  toggle() {
    this.toggleSidenav.emit()
  }
  isActive(route: string): boolean {
    return this.router.url === route;
  }

}

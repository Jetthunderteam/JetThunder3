import {Component, OnInit, EventEmitter} from '@angular/core';
import {Blog} from "../core/representation/blog";
import {BlogService} from "../core/data-services/blog.service";
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'jt-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() notifyOpenSideNav = new EventEmitter();

  constructor() { }

  /**
   * Emits a notification event to the sidenav
   * component, which calls the method openSideNav()
   */
  openSideNav() {
    this.notifyOpenSideNav.emit();
  }

  ngOnInit() {
  }
}

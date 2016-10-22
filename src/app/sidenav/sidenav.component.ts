import { Component, OnInit } from '@angular/core';
import {ViewChild} from "@angular/core/src/metadata/di";

@Component({
  selector: 'jt-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sideNav: any;

  constructor() { }

  /** Closes the side navigation panel */
  closeSideNav() {
    this.sideNav.close();
  }

  /** Opens the side navigation panel */
  openSideNav() {
    this.sideNav.open();
  }

  ngOnInit() {
  }

}

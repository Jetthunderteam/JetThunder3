import { Component, OnInit } from '@angular/core';
import {Blog} from "../core/representation/blog";
import {BlogService} from "../core/data-services/blog.service";

@Component({
  selector: 'jt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts:Blog[] = [];

  constructor(private blogService:BlogService) {
  }

  /**
   * Calls the method getPosts() in the
   * blog data-service, which binds the posts
   * to the view
   */
  getPosts():void {
    this.blogService
      .getPosts()
      .subscribe(posts => {
        this.posts = posts;
      });
  }

  ngOnInit() {
    this.getPosts();
  }

}

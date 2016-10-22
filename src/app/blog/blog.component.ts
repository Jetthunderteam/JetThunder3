import { Component, OnInit } from '@angular/core';
import {BlogService} from "../core/data-services/blog.service";
import {Blog} from "../core/representation/blog";

@Component({
  selector: 'jt-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

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

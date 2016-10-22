import {Observable} from "rxjs";
import {Http, Headers} from "@angular/http";
import {Injectable} from "@angular/core";
import {Blog} from "../representation/blog";
@Injectable()
export class BlogService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private blogUrl = 'api/blog';

  constructor(private http: Http) { }

  /**
   * Makes a http call to the blog API
   * @returns {Promise<ErrorObservable|T>|Promise<ErrorObservable>|Observable<R>|Promise<R>|any}
   */
  getPosts():Observable<Blog[]> {
    return this.http.get(this.blogUrl)
      .map(this.getPostsSuccess)
      .catch(this.handleServerError)
  }

  /**
   * Returns the formatted json data as a representation
   * of the 'Blog' class on the success of the getPosts() method
   * @param res - The response
   * @returns {Blog[]}
   */
  public getPostsSuccess(res) {
    return res.json().data as Blog[];
  }

  /**
   * Returns an error message on the failure
   * of a http server error
   * @param error - The response
   * @returns {ErrorObservable}
   */
  private handleServerError(error: any) {
    return Observable.throw(error.message || error);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addBlog } from '../model/addBlog';

@Injectable({
  providedIn: 'root'
})
export class AddblogService {

  constructor(private httpcl: HttpClient) { }


  private token: string;

  public setToken(token: string): void {
    this.token = token;
  }

  public getToken(): string {
    return this.token;
  }

  private getHeader(): HttpHeaders {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token
    });
    console.log(headers);
    console.log(this.token)
    return headers;
  }
  baseUrl = "http://localhost:9093/dashboard/addBlogs";

  public addPosts(postData: any): Observable<Object> { 
    console.log(postData); 
    console.log(this.token);
    return this.httpcl.post(this.baseUrl, postData);
  }

  baseUrl1 = "http://localhost:9093/dashboard/showBlogs";

  public getPosts() {
    return this.httpcl.get<addBlog[]>(this.baseUrl1);
  }

}

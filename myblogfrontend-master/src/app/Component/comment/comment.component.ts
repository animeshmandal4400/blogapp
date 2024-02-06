import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { comment } from '../../model/comment';
import { AddblogService } from '../../Service/addblog.service';
import { CommentService } from '../../Service/comment.service';
import { v4 as uuid } from 'uuid';


@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit {
  demo: string;
  BlogsId: any;
  comme = new comment("", "", "", 0);
  comm: any;
  com: comment;
  Blogss: any;
  Blogs: any;

  constructor(
    private _blogser: AddblogService,
    private activeRoute: ActivatedRoute,
    private addser: CommentService,
    private showB: AddblogService
  ) {}

  ngOnInit(): void {
    this.showB.getPosts().subscribe(
      (user) => {
        this.Blogss = user;
        this.BlogsId = this.activeRoute.snapshot.params['id'];
        this.Blogs = this.Blogss.find((x) => x.id == this.BlogsId);
        console.log(this.Blogs);
        this.addser.showComments(this.BlogsId).subscribe(
          (user) => {
            console.log(user);
            this.comm = user;
          },
          (error) => {
            console.log(error);
          }
        );   // Call showComments here after setting BlogsId
      
      },
      (error) => {
        console.log(error);
      }
    );
  }

  generateAutoId(): string {
    return uuid();
  }

  onChangeFileField(event: any) {
    this.comme.cId = this.autoId;
    this.comme.vId = this.BlogsId;
  }

  autoId = this.generateAutoId();

  addComm() {
    this.addser.addComments(this.comme).subscribe({
      next: (response) => {
        console.log(response);
        alert("done");
      },
      error: (error) => {
        console.log(error);
        alert("error");
      },
      complete: () => {
        console.log("request is completed");
      },
    });
    this.addser.showComments(this.BlogsId).subscribe(
      (user) => {
        console.log(user);
        this.comm = user;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
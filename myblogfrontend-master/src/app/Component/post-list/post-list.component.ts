import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { addBlog } from '../../model/addBlog';
import { AddblogService } from '../../Service/addblog.service';
import { DataService } from '../../Service/data.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent implements OnInit {
  constructor(private _datasev: AddblogService, private activeRoute : ActivatedRoute) {}

  Data: addBlog[] = [];
  blogPost: addBlog = new addBlog();
  ngOnInit(): void {
    // this.Data= this._datasev.Data;
    this._datasev.getPosts().subscribe({
      next: (response) => {
        this.Data = response;
        console.log(this.Data);
      },
      error: (error) => {
        console.error('Error fetching blog posts:', error);
      }
    });
  }

}

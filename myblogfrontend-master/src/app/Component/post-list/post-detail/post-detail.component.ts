import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { addBlog } from '../../../model/addBlog';
import { AddblogService } from '../../../Service/addblog.service';
import { DataService } from '../../../Service/data.service';



@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit{

  constructor( private activeRoute : ActivatedRoute,private showB:AddblogService) {}

  Blogss : addBlog[];
  Blogs : any;
  BlogsId : any;
  ngOnInit(): void {
    this.showB.getPosts().subscribe(
      user=>{
        this.Blogss=user
        this.BlogsId=this.activeRoute.snapshot.params['id'];
        console.log(this.BlogsId)
        this.Blogs = this.Blogss.find((x) => x.id == this.BlogsId);
      },
      error=>{
        console.log(error)
      }
    )
  }
 }
  




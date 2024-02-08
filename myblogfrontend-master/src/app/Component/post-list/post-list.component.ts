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

  maxHeight = 2; // Maximum number of lines

  isContentOverflow(content: string): boolean {
    const lineHeight = 1.2; // Adjust this value based on your design
    const maxHeight = this.maxHeight * lineHeight;
    const contentHeight = this.getLineHeight(content);
    return contentHeight > maxHeight;
  }

  truncateContent(content: string): string {
    const maxContentLength = this.maxHeight * 50; // Adjust this value based on your design
    if (content.length > maxContentLength) {
      return content.slice(0, maxContentLength) + '...';
    }
    return content;
  }

  private getLineHeight(content: string): number {
    const tempElem = document.createElement('div');
    tempElem.innerHTML = content;
    tempElem.style.position = 'absolute';
    tempElem.style.visibility = 'hidden';
    tempElem.style.whiteSpace = 'pre-wrap';
    tempElem.style.width = '100%';
    tempElem.style.lineHeight = '1.2'; // Adjust this value based on your design
    document.body.appendChild(tempElem);
    const height = tempElem.offsetHeight;
    document.body.removeChild(tempElem);
    return height;
  }

  

}

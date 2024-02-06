import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private httpcl: HttpClient) {}
  data=[
  {
    id: 1,
    title: "Spices Galore: A Culinary Journey through Indian Cuisine",
    content: "Discover the rich flavors and aromatic spices that define Indian cooking.",
    author: "Padma Lakshmi",
    date: "2024-01-15",
    tags: ["Indian Food", "Cuisine", "Spices"],
    url: './assets/1.webp'
  },
  {
    id: 2,
    title: "Incredible India: A Photographic Expedition",
    content: "Explore the diverse landscapes and cultural heritage of India through captivating photographs.",
    author: "Steve McCurry",
    date: "2024-02-01",
    tags: ["Travel", "Photography", "Culture"],
    url: './assets/2.jpeg'
  },
  
  
  {
    id: 3,
    title: "Yoga and Mindfulness: Finding Inner Peace in the Chaos",
    content: "Embark on a spiritual journey through the practice of yoga and mindfulness in the hustle and bustle of modern life.",
    author: "Deepak Chopra",
    date: "2024-02-28",
    tags: ["Yoga", "Mindfulness", "Wellness"],
    url: './assets/3.jpg'
  },
  
  {
    id: 4,
    title: "Indian Art: A Tapestry of Colors and Traditions",
    content: "Dive into the vibrant world of Indian art, exploring traditional and contemporary masterpieces.",
    author: "Raza Hussain",
    date: "2024-03-15",
    tags: ["Art", "Culture", "Indian Art"],
    url: './assets/4.jpeg'
  },
  
  {
    id: 5,
    title: "Tech Innovations in the Silicon Valley of India",
    content: "Unravel the latest technological advancements and startup stories emerging from Bangalore, India's tech hub.",
    author: "Nandan Nilekani",
    date: "2024-04-02",
    tags: ["Technology", "Innovation", "Startups"],
    url: './assets/5.webp'
  },
  
  {
    id: 6,
    title: "Monsoon Magic: A Journey through India's Rainy Season",
    content: "Experience the beauty and significance of the monsoon season in India, from lush landscapes to cultural celebrations.",
    author: "Arundhati Roy",
    date: "2024-04-20",
    tags: ["Monsoon", "Nature", "Culture"],
    url: './assets/6.webp'
  },]

  addnewpost(blogPost: any) {
    this.data.push(blogPost);
    console.log(blogPost);
  }

}
  
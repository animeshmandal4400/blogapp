package com.blogs.dashboard.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
public class dashboardModel {
   @Id
   private int id;
   private String author;
   private String description;
   private String title;
   private String content;
   private String date;
   private String tags;
   private String url;

   public dashboardModel(int id, String author, String description, String title, String content, String date, String tags, String url) {
      this.id = id;
      this.author = author;
      this.description = description;
      this.title = title;
      this.content = content;
      this.date = date;
      this.tags = tags;
      this.url = url;
   }

   public int getId() {
      return id;
   }

   public void setId(int id) {
      this.id = id;
   }

   public String getAuthor() {
      return author;
   }

   public void setAuthor(String author) {
      this.author = author;
   }

   public String getDescription() {
      return description;
   }

   public void setDescription(String description) {
      this.description = description;
   }

   public String getTitle() {
      return title;
   }

   public void setTitle(String title) {
      this.title = title;
   }

   public String getContent() {
      return content;
   }

   public void setContent(String content) {
      this.content = content;
   }

   public String getDate() {
      return date;
   }

   public void setDate(String date) {
      this.date = date;
   }

   public String getTags() {
      return tags;
   }

   public void setTags(String tags) {
      this.tags = tags;
   }

   public String getUrl() {
      return url;
   }

   public void setUrl(String url) {
      this.url = url;
   }

   public dashboardModel() {
      super();
   }
}
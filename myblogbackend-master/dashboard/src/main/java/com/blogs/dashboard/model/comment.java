package com.blogs.dashboard.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class comment {
    @Id
    private String cId;
    private String name;
    private String comment;
    private int vId;

    public comment(String cId, String name, String comment, int vId) {
        this.cId = cId;
        this.name = name;
        this.comment = comment;
        this.vId = vId;
    }

    public String getcId() {
        return cId;
    }

    public void setcId(String cId) {
        this.cId = cId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public int getvId() {
        return vId;
    }

    public void setvId(int vId) {
        this.vId = vId;
    }

    public comment() {
        super();
    }
}
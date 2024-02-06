package com.blogs.dashboard.model;

public class tempResponse {
    private String filename;
    private String message;

    public tempResponse() {
        super();
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }

    @Override
    protected Object clone() throws CloneNotSupportedException {
        return super.clone();
    }
    @Override
    protected void finalize() throws Throwable {
        super.finalize();
    }
    @Override
    public String toString() {
        return "tempResponse{" +
                "filename='" + filename + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
    public tempResponse(String filename, String message) {
        this.filename = filename;
        this.message = message;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public String getFilename() {
        return filename;
    }
    public void setFilename(String filename) {
        this.filename = filename;
    }
}

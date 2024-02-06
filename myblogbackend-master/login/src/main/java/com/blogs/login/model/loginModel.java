package com.blogs.login.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
@Entity
public class loginModel {
    @Id
    private String username;
    private String password;
    private String cnfrmPassword;
    private String fName;
    private String lName;
    private String email;

    public loginModel() {
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
    public String toString() {
        return super.toString();
    }

    @Override
    protected void finalize() throws Throwable {
        super.finalize();
    }

    public loginModel(String username, String password, String cnfrmPassword, String fName, String lName, String email) {
        this.username = username;
        this.password = password;
        this.cnfrmPassword = cnfrmPassword;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCnfrmPassword() {
        return cnfrmPassword;
    }

    public void setCnfrmPassword(String cnfrmPassword) {
        this.cnfrmPassword = cnfrmPassword;
    }

    public String getfName() {
        return fName;
    }

    public void setfName(String fName) {
        this.fName = fName;
    }

    public String getlName() {
        return lName;
    }

    public void setlName(String lName) {
        this.lName = lName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

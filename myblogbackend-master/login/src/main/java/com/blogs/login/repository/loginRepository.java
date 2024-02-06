package com.blogs.login.repository;

import com.blogs.login.model.loginModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface loginRepository extends JpaRepository<loginModel,String> {

    loginModel findByUsername(String username);
    loginModel findByUsernameAndPassword(String username, String password);

}

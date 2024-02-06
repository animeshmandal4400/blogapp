package com.blogs.login.controller;

import com.blogs.login.model.loginModel;
import com.blogs.login.service.loginInterfaceService;
import com.blogs.login.service.loginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class loginController {
    @Autowired
    loginService service;
    @GetMapping("/getAll")
    public ResponseEntity<?> getALlLogin()
    {
        return new ResponseEntity<>(service.searchLogin(), HttpStatus.OK);
    }
    @PostMapping("/register")
    public ResponseEntity<?> getALlLogin(@RequestBody loginModel model)
    {
        System.out.println("controller called");
        return new ResponseEntity<>(service.addRegister(model), HttpStatus.OK);
    }
    @PostMapping ("/login")
    public ResponseEntity<?> login(@RequestBody loginModel model)
    {
        String temp=service.getToken(model).get("error");
        if(temp!=null)
        {
            if(temp.equals("one"))
            {
                return new ResponseEntity<>("Password entered is incorrent",HttpStatus.BAD_REQUEST);
            }
        }
        return new ResponseEntity(service.getToken(model), HttpStatus.OK);
    }
}

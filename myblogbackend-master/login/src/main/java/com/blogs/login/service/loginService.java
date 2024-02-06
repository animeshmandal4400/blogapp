package com.blogs.login.service;

import com.blogs.login.model.loginModel;
import com.blogs.login.repository.loginRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class loginService implements loginInterfaceService{
    @Autowired
    loginRepository repo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public List<loginModel> searchLogin() {
        return repo.findAll();
    }

    @Override
    public loginModel addRegister(loginModel model) {
        model.setPassword(passwordEncoder.encode(model.getPassword()));
        return repo.save(model);

    }

    public Map<String, String> getToken(loginModel model)
    {
        String jwtToken= Jwts.builder().setSubject(repo.findByUsername(model.getUsername()).getUsername())
                .setIssuedAt(new Date(0))
                .signWith(SignatureAlgorithm.HS256, "itckey")
                .compact();

        loginModel modell =repo.findByUsername(model.getUsername());
        String temp=modell.getPassword();
        Map<String, String> jToken= new HashMap<String ,String>();
        boolean tempp=passwordEncoder.matches(model.getPassword(),modell.getPassword());
        if(!tempp)
        {
            String demp="one";
            jToken.put("error",demp);
        }
        jToken.put("token", jwtToken);
        return jToken;
    }

}

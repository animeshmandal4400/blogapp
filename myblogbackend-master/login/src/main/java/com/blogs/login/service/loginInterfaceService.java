package com.blogs.login.service;

import com.blogs.login.model.loginModel;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface loginInterfaceService {

    public List<loginModel> searchLogin();

    public loginModel addRegister(loginModel model);

    public Map<String, String> getToken(loginModel model);
}

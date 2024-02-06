package com.blogs.dashboard.service;

import com.blogs.dashboard.model.comment;
import com.blogs.dashboard.model.dashboardModel;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@Service
public interface dashboardServiceInterface {
    public dashboardModel addBlog(dashboardModel model);
    public List<dashboardModel> showBlogs();
    String uploadImage(String path , MultipartFile file) throws IOException;

    public comment addComm(comment com);

    public List<comment> showCom(int vId);
}

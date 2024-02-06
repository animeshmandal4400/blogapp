package com.blogs.dashboard.controller;

import com.blogs.dashboard.model.comment;
import com.blogs.dashboard.model.dashboardModel;
import com.blogs.dashboard.model.tempResponse;
import com.blogs.dashboard.service.dashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/dashboard")
public class dashboardController
{
    @Autowired
    dashboardService service;
    @Value("${project.image}")
    private String path;
    @PostMapping("/addBlogs")
    public ResponseEntity<?> addB(@RequestBody  dashboardModel model)
    {
        return new ResponseEntity<>(service.addBlog(model), HttpStatus.CREATED);
    }
    @CrossOrigin(allowedHeaders ="*",origins="http://localhost:4200")
    @GetMapping("/showBlogs")
    public ResponseEntity<?> shoB()
    {
        return new ResponseEntity<>(service.showBlogs(), HttpStatus.OK);
    }
    @PostMapping("/upload")
    public ResponseEntity<tempResponse> fileUpload(@RequestParam("image") MultipartFile image) {
        String fileName=null;
        try{
            fileName=this.service.uploadImage(path,image);
        }catch(IOException e)
        {
            e.printStackTrace();
            return new ResponseEntity<>(new tempResponse(null,"Image is not uploaded"),HttpStatus.CONFLICT);
        }
        return new ResponseEntity<>(new tempResponse(fileName,"Image is successfully uploaded"),HttpStatus.OK);
    }
    @PostMapping("/addComment")
    public ResponseEntity<?> addC(@RequestBody comment com)
    {
        return new ResponseEntity<>(service.addComm(com),HttpStatus.OK);
    }
    @GetMapping("getComments/{vId}")
    public ResponseEntity<?> showC(@PathVariable int vId)
    {
        return new ResponseEntity<>(service.showCom(vId),HttpStatus.OK);
    }
}

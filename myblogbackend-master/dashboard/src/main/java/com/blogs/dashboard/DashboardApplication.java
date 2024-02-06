package com.blogs.dashboard;
import com.blogs.dashboard.filter.filter;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DashboardApplication {
	public static void main(String[] args) {
		SpringApplication.run(DashboardApplication.class, args);
		System.out.println("DashBoard running......");
	}
//	@Bean
//	public FilterRegistrationBean getFilter() {
//
//		FilterRegistrationBean filterReg= new FilterRegistrationBean();
//		filterReg.setFilter(new filter());
//		filterReg.addUrlPatterns("/dashboard/addBlogs");
//		filterReg.addUrlPatterns("/dashboard/showBlogs");
//		filterReg.addUrlPatterns("/dashboard/addComment/{vId}");
//		filterReg.addUrlPatterns("/dashboard/getComments/{vId}");
//		return filterReg;
//	}
}

package com.blogs.dashboard.repository;

import com.blogs.dashboard.model.dashboardModel;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface dashboardRepository extends MongoRepository<dashboardModel,Integer> {
}

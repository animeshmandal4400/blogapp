package com.blogs.dashboard.repository;

import com.blogs.dashboard.model.comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface commentRepo extends MongoRepository<comment,Integer> {
    @Query("{'vId':?0}")
    List<comment> findByVId(int vId);
}

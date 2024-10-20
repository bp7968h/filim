package me.bhuwanpandit.filim_server.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import me.bhuwanpandit.filim_server.domain.Review;

@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId> {
    
}

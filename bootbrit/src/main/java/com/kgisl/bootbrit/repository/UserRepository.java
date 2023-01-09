package com.kgisl.bootbrit.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Repository;

import com.kgisl.bootbrit.model.User;


@Repository
public interface UserRepository extends JpaRepository<User,Integer>  {
    @Query("from User where username=?1 and password=?2")
    public List<User> gotologin(String username, String password);
    
}
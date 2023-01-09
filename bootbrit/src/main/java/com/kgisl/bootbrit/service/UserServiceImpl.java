package com.kgisl.bootbrit.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

import com.kgisl.bootbrit.model.User;
import com.kgisl.bootbrit.repository.UserRepository;



@Service("UserService")
public class UserServiceImpl implements UserService{
    @Autowired
     UserRepository userRepository;

    @Override
    @Transactional
    public ModelAndView login(String username, String password) {
        System.out.println("enter impl method");
        System.out.println(username);
        ModelAndView hhh=new ModelAndView();
      // List<User> df = userRepository.getlogin(username, password);
      List<User> df = userRepository.gotologin(username, password);

        System.out.println(df);
        if((df != null) && (df.size() > 0)) {
        
            hhh.setViewName("usertype.html");
            hhh.addObject(df.get(0));
        }
        else
        {
            hhh.setViewName("index2.html");
        }
        return hhh; 
        
    }

    
}
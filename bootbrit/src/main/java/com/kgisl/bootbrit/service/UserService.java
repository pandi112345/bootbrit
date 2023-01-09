package com.kgisl.bootbrit.service;


import org.springframework.stereotype.Service;
import org.springframework.web.servlet.ModelAndView;

//import com.kgisl.bootbrite.model.User;

//import org.springframework.stereotype.Service;
@Service
public interface UserService {

    public ModelAndView login(String username,String password);
   // public  void saveRegister(User theCustomer);
    
}
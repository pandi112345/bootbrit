package com.kgisl.bootbrit.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.kgisl.bootbrit.model.Event;
import com.kgisl.bootbrit.model.Payment;
import com.kgisl.bootbrit.model.User;
import com.kgisl.bootbrit.repository.EventRepository;
import com.kgisl.bootbrit.repository.PaymentRepository;
import com.kgisl.bootbrit.repository.UserRepository;
import com.kgisl.bootbrit.service.UserService;


@RestController
@CrossOrigin
@EnableAspectJAutoProxy(proxyTargetClass = true)
@RequestMapping("/user")
public class BriteController {
    @Autowired
    UserService userService;

    @Autowired
    UserRepository userRepository;

    @Autowired
    EventRepository eventRepository;
    @Autowired
    PaymentRepository paymentRepository;

    @PostMapping(value="/getin", headers = "Accept=application/json")
    public ResponseEntity<?> gotologin(@RequestBody User user,HttpServletRequest req) {
        System.out.println("came here");
        System.out.println(user);
      System.out.println(user.getUsername());
       ModelAndView kkk = userService.login(user.getUsername(),user.getPassword());
      //  Event theEvent = new Event();
        // theModel.addAttribute("loginpage", new User());
        System.out.println(kkk);
    
        return new ResponseEntity<>(kkk,HttpStatus.CREATED);
    }
    @PostMapping(value="/savereg", headers = "Accept=application/json")
    public ResponseEntity<?> savereg(@RequestBody User user1,HttpServletRequest req){
        //ModelAndView mmm=new ModelAndView();
        User savedate = userRepository.save(user1);

        return new ResponseEntity<>(savedate,HttpStatus.CREATED);

    }

    @PostMapping(value="/saveorder", headers = "Accept=application/json")
    public ResponseEntity<?> saveorder(@RequestBody Payment payment,HttpServletRequest req){
        //ModelAndView mmm=new ModelAndView();
         Payment savedate = paymentRepository.save(payment);

        return new ResponseEntity<>(savedate,HttpStatus.CREATED);

    }

    @PostMapping(value="/saveinsert", headers = "Accept=application/json")
    public ResponseEntity<?> saveinsert(@RequestBody Event event,HttpServletRequest req){
        //ModelAndView mmm=new ModelAndView();
        Event savedate = eventRepository.save(event);

        return new ResponseEntity<>(savedate,HttpStatus.CREATED);

    }
@GetMapping(value="/list", headers="Accept=application/json")
@ResponseBody
   public ResponseEntity<?> getalldata( HttpServletRequest req){

    return new ResponseEntity<>(eventRepository.findAll(),HttpStatus.OK);


    }

    @PutMapping(value="/list2", headers="Accept=application/json")
   public ResponseEntity<?> getiddata(HttpServletRequest req){
   // System.out.println(event1);
   int num = Integer.parseInt(req.getParameter("a"));
    //System.out.println(eventRepository.findById(event1.getEvent_id()));
          Event event = eventRepository.findById(num).orElseThrow(() -> new IllegalArgumentException("Not found"));
    
System.out.println(event);
     //return new ResponseEntity<>(eventRepository.findById(event1.getEvent_id()),HttpStatus.OK);
     return new ResponseEntity<>(event, HttpStatus.OK);
       //return null;
    }

    @PutMapping(value="/list3", headers="Accept=application/json")
    public ResponseEntity<?> getallid (@RequestBody Event event, HttpServletRequest req){
 
     return new ResponseEntity<>(eventRepository.findById(event.getEvent_id()),HttpStatus.OK);
 
 
     }



//   @RequestMapping(value ="/getdata",method="get")
//     public String getdata(){
//         System.out.println("hello");
//         return null;

//     }
    
}
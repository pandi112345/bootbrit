package com.kgisl.bootbrit.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kgisl.bootbrit.model.Payment;


@Repository
public interface PaymentRepository extends JpaRepository<Payment,Integer> {
    
}
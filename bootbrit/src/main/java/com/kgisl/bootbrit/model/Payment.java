package com.kgisl.bootbrit.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private int event_id;
    private int amount;
    private long card_no;
    private String card_name;
    private int Ex_no;
    private int cvv;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public int getEvent_id() {
        return event_id;
    }
    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }
    public int getAmount() {
        return amount;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }
    public long getCard_no() {
        return card_no;
    }
    public void setCard_no(long card_no) {
        this.card_no = card_no;
    }
    public String getCard_name() {
        return card_name;
    }
    public void setCard_name(String card_name) {
        this.card_name = card_name;
    }
    public int getEx_no() {
        return Ex_no;
    }
    public void setEx_no(int ex_no) {
        Ex_no = ex_no;
    }
    public int getCvv() {
        return cvv;
    }
    public void setCvv(int cvv) {
        this.cvv = cvv;
    }
    @Override
    public String toString() {
        return "Payment [id=" + id + ", username=" + username + ", event_id=" + event_id + ", amount=" + amount
                + ", card_no=" + card_no + ", card_name=" + card_name + ", Ex_no=" + Ex_no + ", cvv=" + cvv + "]";
    }

    
    
}

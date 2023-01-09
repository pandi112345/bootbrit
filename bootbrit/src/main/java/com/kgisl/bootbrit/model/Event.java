package com.kgisl.bootbrit.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "event")
public class Event {
    @Id
    @Column  
    private int  event_id;
    @Column  
    private String event_name;
    @Column  
    private String description;
    @Column  
    private String location;
    @Column  
    private String date;
    @Column  
    private String time;
    @Column  
    private String venue;
    @Column  
    private String concept;
    @Column  
    private String company;
    @Column  
    private int prize;
    public Event(){

    }
    public int getEvent_id() {
        return event_id;
    }
    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }
    public String getEvent_name() {
        return event_name;
    }
    public void setEvent_name(String event_name) {
        this.event_name = event_name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public String getDate() {
        return date;
    }
    public void setDate(String date) {
        this.date = date;
    }
    public String getTime() {
        return time;
    }
    public void setTime(String time) {
        this.time = time;
    }
    public String getVenue() {
        return venue;
    }
    public void setVenue(String venue) {
        this.venue = venue;
    }
    public String getConcept() {
        return concept;
    }
    public void setConcept(String concept) {
        this.concept = concept;
    }
    public String getCompany() {
        return company;
    }
    public void setCompany(String company) {
        this.company = company;
    }
    public int getPrize() {
        return prize;
    }
    public void setPrize(int prize) {
        this.prize = prize;
    }
    @Override
    public String toString() {
        return "Event [event_id=" + event_id + ", event_name=" + event_name + ", description=" + description
                + ", location=" + location + ", date=" + date + ", time=" + time + ", venue=" + venue + ", concept="
                + concept + ", company=" + company + ", prize=" + prize + "]";
    }
    
    
}
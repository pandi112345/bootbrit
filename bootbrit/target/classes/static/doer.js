//alert("enter in js");
let Events= [];
function log(){
    console.log("hello");
    var item={
        
        "username":document.getElementById("user").value,
        "password":document.getElementById("pass").value
        
    }
    console.log(item);
    $.ajax({
    type: "POST",
    url: "http://localhost:8080/user/getin",
    data: JSON.stringify(item),
    contentType:"application/json",
    success: function (result) {
        //getAll();
        console.log("sucesss");
        console.log(result);
    location.href=result.viewName;
    console.log("hello");
    console.log(result.model.user.username);
    sessionStorage.setItem("username",result.model.user.username);
    },
    error: function (result) {
        alert("msg");
    },
});

}



function reg(){
    console.log("hello");
    var item={
        "id":" " ,
        "username":document.getElementById("user").value,
        "password":document.getElementById("pass").value,
        "cpassword":document.getElementById("cpass").value,
        "email":document.getElementById("email").value
        
    }
    console.log(item);
    $.ajax({
    type: "POST",
    url: "http://localhost:8080/user/savereg",
    data: JSON.stringify(item),
    contentType:"application/json",
    success: function (result) {
        //getAll();
        console.log("sucesss");
        console.log(result);
       location.href="index2.html";
    },
    error: function (result) {
        alert("msg");
    },
});

}


function get(){
    console.log("hiii");
    selectElement = document.querySelector('#utype');
    output = selectElement.value;
    console.log(output);
    if(output=='viewer'){
       // showdetails();
        location.href="viewer.html";

    }
    else{

        location.href="insertdetails.html";
    //insertdetails();

    }

}




function insertdetails(){
//     const date = document.getElementById("date").value;
   
//    const [month, year, day] = date.split('-');
   
//    const result = [year, month, day].join('-');
   
   //console.log(result);
   
       var newitem = {
           "event_id": document.getElementById("event_id").value,
           "event_name": document.getElementById("event_name").value,
           "description": document.getElementById("decs").value,
           "location": document.getElementById("location").value,
           "date": document.getElementById("date").value,
           "time": document.getElementById("time").value,
           "venue": document.getElementById("venue").value,
           "concept": document.getElementById("concept").value,
           "company": document.getElementById("company").value,
           "prize":document.getElementById("prize").value
   
       }
       console.log(newitem);
       $.ajax({
           type: "POST",
           url: "http://localhost:8080/user/saveinsert",
           data: JSON.stringify(newitem),
           contentType:"application/json",
           success: function (result) {
               //getAll();
               console.log("sucesss");
               
               //getnew();
           },
           error: function (result) {
               alert("msg");
           },
       });
   
   }

   function showdetails(){
    console.log("enter into showdetails");
    $.ajax({
        url: "http://localhost:8080/user/list",
        type: "GET",
        dataType: "json",
        contentType:"application/json",
        success: function (data) {
            console.log("success");
            console.log(data);
        //Event=data;
    displayItems(data);

        },
        error: function (error) {
            console.log(`Error ${error}`);
        },
    });
}


function displayItems(data){

    //location.href="viewer.html";
    
    console.log("inside the display function");
    const tEvent = document.getElementById("event");
 console.log(tEvent);
 const button = document.createElement("button");

  data.forEach((item) => {


    let editButton = button.cloneNode(false);
    editButton.innerText = "Book Here";
    editButton.setAttribute("onclick", `editItem(${item.event_id})`);

        
        console.log(item.event_id);
        let tr = tEvent.insertRow();

        let td1 = tr.insertCell(0);
        let event_id = document.createTextNode(item.event_id);
        td1.appendChild(event_id);

        let td2 = tr.insertCell(1);
        let event_name = document.createTextNode(item.event_name);
        td2.appendChild(event_name);

        let td3 = tr.insertCell(2);
        let description = document.createTextNode(item.description);
        td3.appendChild(description);

        let td4 = tr.insertCell(3);
        let location = document.createTextNode(item.location);
        td4.appendChild(location);

        let td5 = tr.insertCell(4);
        let date = document.createTextNode(item.date);
        td5.appendChild(date);

        let td6 = tr.insertCell(5);
        let time = document.createTextNode(item.time);
        td6.appendChild(time);

        let td7 = tr.insertCell(6);
        let venue = document.createTextNode(item.venue);
        td7.appendChild(venue);

        let td8 = tr.insertCell(7);
        let concept = document.createTextNode(item.concept);
        td8.appendChild(concept);

        let td9 = tr.insertCell(8);
        let company = document.createTextNode(item.company);
        td9.appendChild(company);

        let td10 = tr.insertCell(9);
        let prize = document.createTextNode(item.prize);
        td10.appendChild(prize);

        let td11= tr.insertCell(10);
        td11.appendChild(editButton);

    });
    Event= data;
    
}



function editItem(event_id) {
    sessionStorage.setItem("event_id",event_id);
   // document.getElementById("iid").style.display="none";
    //console.log(updateIndex);
    location.href="order.html";
}

function pay(){
    location.href="payment.html";

}


function paymentdetails(){
    username();
    console.log("enter in payment details")
    console.log(sessionStorage.getItem("uname"));
    console.log(sessionStorage.getItem("event_id"));
    console.log(sessionStorage.getItem("amount"));
    document.getElementById("uname1").value =sessionStorage.getItem("uname");
    document.getElementById("eid").value =sessionStorage.getItem("event_id");
    document.getElementById("amount").value =sessionStorage.getItem("amount");
}

function getedit1(){
    //username();

console.log(sessionStorage.getItem("event_id"));
  var newitem={
    "event_id":sessionStorage.getItem("event_id")
   } 
   console.log(newitem);
   $.ajax({
    type: "PUT",
    url: "http://localhost:8080/user/list3",
    data: JSON.stringify(newitem),
    contentType:"application/json",
    success: function (data) {
        console.log("convert into array");
       // let arr=[];
       // arr=data;
      //  console.log(arr);
        //console.log("sucess");
       // Events=data;
    
   
     //console.log("parse");
     console.log(data.event_name);
     document.getElementById("event_id").value=data.event_id;
     document.getElementById("event_name").value=data.event;
     document.getElementById("des").value=data.description;
     document.getElementById("loc").value=data.location;
     document.getElementById("date").value=data.date;
     document.getElementById("Time").value=data.time;
     document.getElementById("venue").value=data.venue;
     document.getElementById("concept").value=data.concept;
     document.getElementById("Company").value=data.company;
     document.getElementById("prize").value=data.prize;
     //console.log(data);
     //console.log(data);
       // console.log("after parse the data");
       // console.log(arr);
   //// var data = JSON.parse(data);
    // var newData = JSON.stringify(data);
    //console.log(newData);
       display(data);
        //getAll();
      
        //getnew();
    },
    error: function (data) {
        alert("msg");
    },
});

  }
  function getedit(){
    alert ("enter ");
    $('#tabledata').DataTable({
        "ajax": {
            type: "PUT",
            "url": "http://localhost:8080/user/list2",
            "data": {a:sessionStorage.getItem("event_id")}
        },
        "columns": [
            { "data": "event_id" },
            { "data": "event_name" },
            { "data": "description" },
            { "data": "location" },
            { "data": "date" },
            { "data": "time" },
            { "data": "venue" },
            { "data": "concept" },
            { "data": "company" },
            { "data": "prize" }
        ]
    });
  }

  function displaygetdata(data){

    //location.href="viewer.html";
    
    console.log("inside the display function");
    const tEvent = document.getElementById("event");
 console.log(tEvent);
 const button = document.createElement("button");

  data.forEach((item) => {


    let editButton = button.cloneNode(false);
    editButton.innerText = "Book Here";
    editButton.setAttribute("onclick", `editItem(${item.event_id})`);

        
        console.log(item.event_id);
        let tr = tEvent.insertRow();

        let td1 = tr.insertCell(0);
        let event_id = document.createTextNode(item.event_id);
        td1.appendChild(event_id);

        let td2 = tr.insertCell(1);
        let event_name = document.createTextNode(item.event_name);
        td2.appendChild(event_name);

        let td3 = tr.insertCell(2);
        let description = document.createTextNode(item.description);
        td3.appendChild(description);

        let td4 = tr.insertCell(3);
        let location = document.createTextNode(item.location);
        td4.appendChild(location);

        let td5 = tr.insertCell(4);
        let date = document.createTextNode(item.date);
        td5.appendChild(date);

        let td6 = tr.insertCell(5);
        let time = document.createTextNode(item.time);
        td6.appendChild(time);

        let td7 = tr.insertCell(6);
        let venue = document.createTextNode(item.venue);
        td7.appendChild(venue);

        let td8 = tr.insertCell(7);
        let concept = document.createTextNode(item.concept);
        td8.appendChild(concept);

        let td9 = tr.insertCell(8);
        let company = document.createTextNode(item.company);
        td9.appendChild(company);

        let td10 = tr.insertCell(9);
        let prize = document.createTextNode(item.prize);
        td10.appendChild(prize);

        let td11= tr.insertCell(10);
        td11.appendChild(editButton);

    });
    Event= data;
    
}




  function display(arr){

    //location.href="viewer.html";
    //data = JSON.parse(data);
    // console.log(event1);
    const tEvents = document.getElementById("showall");
//  const button = document.createElement("button");

arr.forEach((item) => {
    

    ///console.log(data);


    //let editButton = button.cloneNode(false);
    //editButton.innerText = "Book Here";
    //editButton.setAttribute("onclick", `editItem(${item.event_id})`);

        
        console.log(item.event_id);
        let tr = tEvents.insertRow();

        let td1 = tr.insertCell(0);
        let event_id = document.createTextNode(item.event_id);
        td1.appendChild(event_id);

        let td2 = tr.insertCell(1);
        let event_name = document.createTextNode(item.event_name);
        td2.appendChild(event_name);

        let td3 = tr.insertCell(2);
        let description = document.createTextNode(item.description);
        td3.appendChild(description);

        let td4 = tr.insertCell(3);
        let location = document.createTextNode(item.location);
        td4.appendChild(location);

        let td5 = tr.insertCell(4);
        let date = document.createTextNode(item.date);
        td5.appendChild(date);

        let td6 = tr.insertCell(5);
        let time = document.createTextNode(item.time);
        td6.appendChild(time);

        let td7 = tr.insertCell(6);
        let venue = document.createTextNode(item.venue);
        td7.appendChild(venue);

        let td8 = tr.insertCell(7);
        let concept = document.createTextNode(item.concept);
        td8.appendChild(concept);

        let td9 = tr.insertCell(8);
        let company = document.createTextNode(item.company);
        td9.appendChild(company);

        let td10 = tr.insertCell(9);
        let prize = document.createTextNode(item.prize);
        td10.appendChild(prize);

        // let td11= tr.insertCell(10);
        // td11.appendChild(editButton);

     });
    Events= data;
    
}

function payment(){
    alert("enter in to pay function");
    var a= document.getElementById("tic").value;
    var b= document.getElementById("prize").value;
    var c=a*b;
    document.getElementById("total").value=c;
    sessionStorage.setItem("amount",c);
}

function paymentdetails(){
   // username();
    console.log("enter in payment details")
   // console.log(sessionStorage.getItem("uname"));
    console.log(sessionStorage.getItem("event_id"));
    console.log(sessionStorage.getItem("amount"));
   document.getElementById("uname1").value =sessionStorage.getItem("username");
    document.getElementById("eid").value =sessionStorage.getItem("event_id");
    document.getElementById("amount").value =sessionStorage.getItem("amount");
}



function orderinsert(){
    console.log("enter in order insert");
var newitem = {
    "id": "",
    "username": document.getElementById("uname1").value,
    "event_id": document.getElementById("eid").value,
    "amount": document.getElementById("amount").value,
    "card_no": document.getElementById("cardno").value,
    "card_name": document.getElementById("cardname").value,
    "Ex_no": document.getElementById("exp").value,
    "cvv": document.getElementById("cvv").value,
     
}
console.log(newitem);
$.ajax({
    type: "POST",
    url: "http://localhost:8080/user/saveorder",
    data: JSON.stringify(newitem),
    contentType:"application/json",
    //alert("u r ticket is booked")
    success: function (result) {
        //getAll();
        console.log("sucesss");
        //location.href("viewer.html");
     
        //getnew();
    },
    error: function (result) {
        alert("msg");
    },
});
}
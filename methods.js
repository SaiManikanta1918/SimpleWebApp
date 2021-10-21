function sign_out(){
    if(localStorage.getItem("username")!=undefined){
        var uname = localStorage.getItem("username");
        localStorage.removeItem("username");
    }
    if(localStorage.getItem("password")!=undefined){
        var password = localStorage.getItem("password");
        localStorage.removeItem("password");
    }
    document.getElementById("login").style.display = "block";
    document.getElementById("right").style.display = "none";
    window.location = "login.html";
}
     
function getWindowSize(){
    var x = document.getElementById("screen");
    var w = window.innerWidth;
    var h = window.innerHeight;
    x.innerHTML = + w + "x" + h;
}

class Customer{
    constructor(accno,acctype,cname,bal){
        this.accno = accno;
        this.acctype = acctype;
        this.cname = cname;
        this.bal = bal;
    }
}
var customers = new Map();

function createCustomer(){
    event.preventDefault();
    var cname = document.getElementById("cname").value;
    var acctype= document.getElementById("acctype").value;
    var accno = document.getElementById("accno").value;
    var bal = document.getElementById("bal").value;
    var customer = new Customer(accno,acctype,cname,bal);
    customers.set(accno,customer);
    setTimeout(alert("customer created"),2000);
}

function getDetails(){
    event.preventDefault();
    var accno = document.getElementById("accno_details").value;
    console.log(customers.get(accno));
    // if(customers.has(accno)){
    //     alert(customers.get(accno));
    // }
    // else{
    //     alert("customer not present");
    // }
}

function transaction_submit(){
    var tacctype= document.getElementById("tacctype").value;
    var taccno = document.getElementById("taccno").value;
    var tamt = document.getElementById("tamt").value;
}

function deleteDetails(){
    var accno = document.getElementById("delete_accno").value;
    if(customers.has(accno)){
        alert("customer present");
    }
}

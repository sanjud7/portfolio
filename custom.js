function msg(){

    

    var name=document.contact.name.value;  
    var email=document.contact.email.value;  
    var subject=document.contact.subject.value; 

    function num(x){
        

    if(name=="" || name==null){
        alert("please fill the required field");

        return x+1;

    }

    else if(email=="" || email==null){
        alert("please fill the required field");
        return x+1;


    }
    else if(subject=="" || subject==null){
        alert("please fill the required field");
        return x+1;

    }

    return 0;
    
}
var y=0;
y=num(0);

   
 

   if(y===0)
   {
       
    document.getElementById("submit").style.background= "#28a745";
    document.getElementById("submit").innerHTML= "MESSAGE SENT"


    setTimeout(function(){
        var form = document.getElementById("contact");
        form.reset();
    
        document.getElementById("submit").style.background= "#fff";
        document.getElementById("submit").innerHTML= "SEND MESSAGE"
    }, 2000);
}
    
 
   
  
      
   
    


} 
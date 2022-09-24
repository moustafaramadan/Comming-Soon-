let countDown= new Date();
countDown= new Date( countDown.getFullYear()+1, countDown.getMonth()-6 ,01 )
console.log(countDown)

var x =setInterval( function(){
    var now= new Date();
    var diff= countDown-now;
    var months= Math.floor(diff/(30*24*60*60*1000));
    var days= Math.floor((diff % (30*24*60*60*1000))/ (24*60*60*1000));
    var hours= Math.floor ((diff % (1000*60*60*24)) / (60*60*1000));
    var minutes= Math.floor ((diff % (1000*60*60))/ (1000*60));
    var seconds= Math.floor((diff% (1000*60))/1000);

    document.getElementById("months").innerHTML= months;
    document.getElementById("days").innerHTML= days;
    document.getElementById("hours").innerHTML= hours;
    document.getElementById("minutes").innerHTML= minutes;
    document.getElementById("seconds").innerHTML= seconds;
}, 1000)


const form = document.querySelectorAll(".mail");
const mail=document.getElementById("input");
const mail2=document.getElementById("input2");
const error= document.getElementById("invalid-mail");
const valid= document.getElementById("valid-mail");
const error2= document.getElementById("invalid-mail2");
const valid2= document.getElementById("valid-mail2");

    form[0].addEventListener('submit', (e)=>{
        let mailV=false;
        if(mail.value===""){
         mailV=false
         error.style.visibility="visible"
        } 
     
        if(mail.value!==""){
         mailV=true;
         valid.style.visibility="visible"
        }  
        if(mailV===false){
            e.preventDefault()
        }
    })

    form[1].addEventListener('submit', (e)=>{
        let mailV=false;
        if(mail2.value===""){
         mailV=false
         error2.style.visibility="visible"
        } 
     
        if(mail2.value!==""){
         mailV=true;
         valid2.style.visibility="visible"
        }  
        if(mailV===false){
            e.preventDefault()
        }
    })



    


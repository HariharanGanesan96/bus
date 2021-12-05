
var totalSeats=[40,40,40,40,20,20];
var availableSeats=[30,25,34,23,10,15];
var amount=[500,500,500,500,1000,1000];
var times=['10:00','12:00','12:20','01:00','03:00','08:00'];
var printvalue;
var busname='busname';
var div='bus';
var seat='seats';
function c(){
    let count=1;
    let from=document.getElementById("from").value;
    let to=document.getElementById("to").value;
    if(from=="" || to==""){
       alert("The value should not be null");
    }
    else if(from==to){
        alert("source and destination same");
    }   
    else{

        for(let i=0;i<6;i++){
            console.log(busname+count);
            document.getElementById(busname+count).innerHTML=from+" To "+to+" "+from.charAt(0)+to.charAt(0)+"000"+count;
            document.getElementById(busname+count).innerHTML+=' &emsp; Total available '+availableSeats[i]+' &emsp; Start Time '
                                                              +times[i]+' &emsp; Travel hours : 5h:30m'+' &emsp; Amount: '+amount[i];
                                         
            document.getElementById(seat+count).innerHTML='Total Seats '+totalSeats[i];                             
            document.getElementById(div+count).style.border="1px solid #000000";
            document.getElementById(div+count).style.backgroundColor="white";
            document.getElementById(div+count).style.borderRadius="5px";
            document.getElementById(div+count).style.backgroundColor="rgba(255, 255, 255, 0.884)";
            count++;
        }
        document.getElementById("1").style.display='block';
    }
}
function show(id){
        let name=document.getElementById(id).innerHTML;
            printvalue=name.split(" ");  
            console.log(printvalue); 
        document.getElementById("bustype").value=printvalue[3];
        document.getElementById("totalamount").value=0;
}
function calculate(){
    let count=document.getElementById("count").value;
    if(count>printvalue[7]){
        alert("Number of seats given higher then available");
    }
    else{
    document.getElementById("totalamount").value=count*printvalue[19];
}
}

    


var busNames=['chennai to madurai CTM0001','chennai to madurai CTM0002','chennai to madurai CTM0003',
'chennai to madurai CTM0004','chennai to madurai CTMS0005','chennai to madurai CTMS0006'];
var totalSeats=[40,40,40,40,20,20];
var availableSeats=[30,25,34,23,10,15];
var times=['10:00','12:00','12:20','01:00','03:00','08:00'];
var busname='busname';
var div='bus';
var seat='seats';
function c(){
    let count=1;
    let from=document.getElementById("from").value;
    console.log(from);
    let to=document.getElementById("to").value;
    if(from==to){
        alert("source and destination same");
    }   
    else{
        for(let i=0;i<busNames.length;i++){
            console.log(busname+count);
            document.getElementById(busname+count).innerHTML=busNames[i]+
                                         ' &emsp; Total available '+availableSeats[i]+' &emsp; Start Time '+times[i]+' &emsp; Travel hours : 5h:30m';
            document.getElementById(seat+count).innerHTML='Total Seats '+totalSeats[i];                             
            document.getElementById(div+count).style.border="1px solid #000000";
            document.getElementById(div+count).style.backgroundColor="white";
            document.getElementById(div+count).style.borderRadius="5px";
            count++;
        }
    }
}
function show(id){
        let name=document.getElementById(id).innerHTML;
        console.log(name);
        let printvalue=name.split(" ");
        console.log(printvalue[3]);
        document.getElementById("bustype").value=printvalue[3];
}
function calculate(){
    let count=document.getElementById("count").value;
    console.log(count)
    let bustype=document.getElementById("bustype").value;
    if(bustype.includes("S")){
    document.getElementById("totalamount").value=count*1000;
    }
    else{
        document.getElementById("totalamount").value=count*500; 
    }
}

    

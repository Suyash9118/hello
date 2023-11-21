var txtNo1=document.getElementById('txtNo1');
var txtNo2=document.getElementById('txtNo2');
var txtresult=document.getElementById('txtresult');
//alert(txtNo1.value);
function plus_Click(e){
  // alert("pluscheked");
   var no1=txtNo1.value;
   var no2=txtNo2.value;
   var r=sum(parseInt(no1),parseInt(no2));
   txtresult.value=r;
}
function minus_Click(e){
    
    var no1=txtNo1.value;
    var no2=txtNo2.value;
    var r=sub(parseInt(no1),parseInt(no2));
    txtresult.value=r;
}
function mult_Click(e){
    var no1=txtNo1.value;
    var no2=txtNo2.value;
    var r=mul(parseInt(no1),parseInt(no2));
    txtresult.value=r;

}
function div_Click(w){
    var no1=txtNo1.value;
    var no2=txtNo2.value;
    var r=div(parseInt(no1),parseInt(no2));
    txtresult.value=r;

}
function modulas_Click(w){
    var no1=txtNo1.value;
    var no2=txtNo2.value;
    var r=mod(parseInt(no1),parseInt(no2));
    txtresult.value=r;

}



function sum(txtNo1,txtNo2){
    var txtresult=txtNo1+txtNo2;
    return txtresult;
}
function sub(txtNo1,txtNo2){
    var txtresult=txtNo1-txtNo2;
    return txtresult;
}
function mul(txtNo1,txtNo2){
    var txtresult=txtNo1*txtNo2;
    return txtresult;
}
function div(txtNo1,txtNo2){
    var txtresult=txtNo1/txtNo2;
    return txtresult;
}
function mod(txtNo1,txtNo2){
    var txtresult=txtNo1%txtNo2;
    return txtresult;
}
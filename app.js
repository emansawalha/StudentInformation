'use strict';
function getRandom(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
let tableEl = document.getElementById('stdTable')
let arr = []

function Student(stdName, stdEmail, stdTuition) {
    this.stdName = stdName;
    this.stdEmail = stdEmail;
    this.stdTuition = stdTuition;
    this.age =getRandom(18,24);
    arr.push(this);
}
/*
function showStudent (){
   
    let studentEmail = document.getElementById('stEmail').nodeValue;
    let studentmobNo =document.getElementById('mobNo').value ; 
    let current = JSON.parse(ratings);
    current.push({
        
    })
}


function generateName(){
    let email = document.getElementById('stEmail').value;

    email
}*/
let id =[]
function stdID{
    
for (let i = 1 ; i<=id.length;i++){

    id.push[i];
}
return id;
}

function stdname(){

    let email = document.getElementById('stEmail').Value;
    let name = email.split("@");
      return name;
    
}

function GetSelectedValue(){
    var e = document.getElementById("stdTuition");
    var result = e.options[e.selectedIndex].value;
    
   return result;
}

 Student.prototype.Render=function(){

    let tr = document.createElement('tr')
    tableEl.appendChild(tr)

    for(let i=0 ; i<arr.length;i++){
    let td1 = document.createElement('td')
    tr.appendChild('td')
    td1.textContent=stdID;
   
    let td2 = document.createElement('td');
    tr.appendChild(td2)
    td2.textContent = stdname;

    let td2 = document.createElement('td')
    tr.appendChild(td2)
    td2.textContent=document.getElementById('mobNo').Value;

    let td3= createElement('td')
    tr.appendChild(td3)
    td3.textContent = GetSelectedValue;

    }
    totalTuit();
}

    function totalTuit(){
   let Tuit =document.getElementById('stdTuition')
   let total = 0; 
   for(let i = 0 ; i <Tuit.length; i++){
       total=total + Tuit[i].value;

   }
   document.getElementById('stdTuition').value = total;
    
 }
  




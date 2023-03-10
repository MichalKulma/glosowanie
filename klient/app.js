tlo=0
function vote(){
    if(wybierz1==1){ console.log(1)

    }
    else if(wybierz2==1){ console.log(2)
   
    }
    else if(wybierz3==1){ console.log(3)
  
    }
const pesel= document.getElementById("pesel").value
if(pesel==""){

document.getElementById("podaj").innerHTML="Proszę podać pesel"

}
else document.getElementById("podaj").innerHTML="Głos oddany"
}


function glos1(){
    wybierz1=1
    wybierz2=0
    wybierz3=0
    document.getElementById("kand1").style.backgroundColor="green"
    document.getElementById("kand2").style.backgroundColor="white"
    document.getElementById("kand3").style.backgroundColor="white"
}

function glos2(){
    wybierz1=0
    wybierz2=1
    wybierz3=0
    document.getElementById("kand1").style.backgroundColor="white"
    document.getElementById("kand2").style.backgroundColor="green"
    document.getElementById("kand3").style.backgroundColor="white"
}

function glos3(){
    wybierz1=0
    wybierz2=0
    wybierz3=1
    document.getElementById("kand1").style.backgroundColor="white"
    document.getElementById("kand2").style.backgroundColor="white"
    document.getElementById("kand3").style.backgroundColor="green"
}

function jasny(){
if(tlo==0){
    document.getElementById("body").style.backgroundColor="black"
    document.getElementById("body").style.color="aqua"
    tlo=1
}
else if(tlo==1){
    document.getElementById("body").style.backgroundColor="white"
    document.getElementById("body").style.color="black"
    tlo=0
}
}
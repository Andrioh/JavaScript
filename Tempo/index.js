setInterval(function () {

    let Horas = new Date().getHours();
    let Minutos = new Date().getMinutes();
    let Segundos = new Date().getSeconds();

    if (Horas < 10 && Minutos < 10 && Segundos < 10 ){
        document.getElementById("Tempo").innerHTML="0"+Horas+":0"+Minutos+":0"+Segundos;
      } else if(Horas < 10 && Minutos < 10 && Segundos >= 10){
        document.getElementById("Tempo").innerHTML="0"+Horas+":0"+Minutos+":"+Segundos;
      } else if(Horas < 10 && Minutos >= 10 && Segundos < 10){
        document.getElementById("Tempo").innerHTML="0"+Horas+":"+Minutos+":0"+Segundos;
      } else if(Horas < 10 && Minutos >= 10 && Segundos >= 10){
        document.getElementById("Tempo").innerHTML="0"+Horas+":"+Minutos+":"+Segundos;
      } else if(Segundos < 10 && Minutos < 10 && Horas >= 10){
        document.getElementById("Tempo").innerHTML=Horas+":0"+Minutos+":0"+Segundos;
      } else if(Horas < 10 && Minutos >= 10 && Segundos >= 10){
        document.getElementById("Tempo").innerHTML="0"+Horas+":"+Minutos+":"+Segundos;
      } else if(Horas >= 10 && Minutos < 10 && Segundos >= 10){
        document.getElementById("Tempo").innerHTML=Horas+":0"+Minutos+":"+Segundos;
      } else if(Horas >= 10 && Minutos >= 10 && Segundos < 10){
        document.getElementById("Tempo").innerHTML=Horas+":"+Minutos+":0"+Segundos;
      } else {
        document.getElementById("Tempo").innerHTML=Horas+":"+Minutos+":"+Segundos;
      }

}, 1000);
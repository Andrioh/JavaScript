const ajax = new XMLHttpRequest();
ajax.open('GET','https://viacep.com.br/ws/28625110/json/');
ajax.send();

ajax.onload = function(){
    document.getElementById("Area").innerHTML = this.responseText;
}
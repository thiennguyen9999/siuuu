function function1(){
    document.getElementById("background-header-3").style.display="block";
    document.getElementById("background-header-4").style.display="block";
}
function function2(){
    document.getElementById("background-header-3").style.display="none";
    document.getElementById("background-header-4").style.display="none";
}
function function3(){
        var x = document.getElementById("input-content-2");
        if (x.type =="password") {
          x.type = "text";
        } 
    document.getElementById("background-hidepass-content-1").style.display="none";
    document.getElementById("background-showpass-content-1").style.display="block";
}
function function4(){
    var x = document.getElementById("input-content-2");
    if (x.type =="text") {
      x.type = "password";
    }
    document.getElementById("background-hidepass-content-1").style.display="block";
    document.getElementById("background-showpass-content-1").style.display="none";
}
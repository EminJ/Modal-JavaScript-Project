function panelopen() {
    let modalpanel = document.getElementById("modalpanel");

    if(modalpanel.style.display=="block"){
        modalpanel.style.display="none";
    }
    else{
        modalpanel.style.display="block";
    }
  }

function panelclose(){
    let modalpanel = document.getElementById("modalpanel");
    try{
        modalpanel.style.display="none";
    }
    catch{
        alert("Panel Error")
    }
}

function btnfinish(){
    let modalpanel = document.getElementById("modalpanel");
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");

    if(name.value=="" || surname.value==""){
        alert("Panel Error");
        return
    }
    try{
        modalpanel.style.display="none";
    }
    catch{
        alert("Panel Error");
        return
    }

    alert("Name: "+name.value+", Surname: "+ surname.value);
}
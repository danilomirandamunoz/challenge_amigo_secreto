// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrAmigos =[];

function sortearAmigo(){
    if(arrAmigos.length==0)
    {
        alert("Debe ingresar al menos un amigo");
    }
    else{
        const randomIndex = Math.floor(Math.random() * arrAmigos.length);
        var lblNombreAmigo = document.getElementById("resultado");
        const amigoSeleccionado = arrAmigos[randomIndex];
        lblNombreAmigo.innerHTML =  `<li>El amigo secreto sorteado es: ${amigoSeleccionado}</li>` ;
        document.getElementById("listaAmigos").innerHTML = "";
        arrAmigos = [];
    }
}

function agregarAmigo(){
    var txtAmigo = document.getElementById("amigo");
    if(txtAmigo.value == ""){
        alert("Por Favor, ingrese un nombre válido.");
    }
    else{
        arrAmigos.push(txtAmigo.value);
        document.getElementById("listaAmigos").innerHTML += `<li>${txtAmigo.value}</li>`;
        txtAmigo.value = "";
        document.getElementById("resultado").innerHTML = "";
    }
}





let arrayClientes = [];

function addCliente(nombre,origen,destino,cantidad,fecha){

    let cliente={ 
        nombre: nombre,
        origen: origen,
        destino: destino,
        cantidad:cantidad,
        fecha: fecha
    };
    console.log(cliente);
    arrayClientes.push(cliente);
    console.log(arrayClientes);


}


function getInfo(){

let name = document.getElementById("name").value;
let origen = document.getElementById("origen").value;
let destino = document.getElementById("destino").value.toLowerCase();
let cantidad = document.getElementById("cantidad").value;
let fecha = document.getElementById("fecha").value;

addCliente(name,origen,destino,cantidad,fecha);

}



//======================= PUNTO 3 ===========================

function filtrado(){

    let destino = document.getElementById("destino").value;
    let mostrar = document.getElementById("tabla");

    for(let i = 0; i<arrayClientes.length;i++){
        if(arrayClientes[i].destino === "canarias" ||
        arrayClientes[i].destino === "mallorca" ||
        arrayClientes[i].destino === "galicia"){
            console.log(arrayClientes[i])
        }
    }
    mostrar.innerHTML +=`<tr>
                            <th>Nombre</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Cantidad</th>
                         </tr>`


    for(let i=0; i<arrayClientes.length;i++){
        if(arrayClientes[i].destino === "canarias" ||
        arrayClientes[i].destino === "mallorca" ||
        arrayClientes[i].destino === "galicia"){
            mostrar.innerHTML +=`<tr>
            <td>${arrayClientes[i].nombre}</th>
            <td>${arrayClientes[i].origen}</th>
            <td>${arrayClientes[i].destino}</th>
            <td>${arrayClientes[i].cantidad}</th>
         </tr>`;
        }
    }



}
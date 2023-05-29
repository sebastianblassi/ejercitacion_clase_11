let helado = 550; //precio del helado

let topping = "Oreo";
let precio;
let precioFinal;

if(topping == "Oreo"){
  precio = 10;
}else if(topping == "KitKat"){
  precio == 15;
}else if(topping == "Kinder"){
  precio == 25;
}else{
    console.log("No tenemos este topping");
}

precioFinal = helado + precio;

console.log("El helado cuesta $ "  + precioFinal)



let producto = "carne";
let bebida = 0;

switch(producto){
    case "carne":
        console.log("Menu carne");
        bebida = "vino tinto"
        break;
    case "pescado":
        console.log("Menu pescado");
        bebida = "vino blanco"
        break;
    case "verdura":
        console.log("Menu verdura");
        bebida = "agua"
    default:
        console.log("Elije carne, pescado o verdura");
}

console.log("La bebida para su menu es " + bebida)




let equipos = ["Boca", "River", "Independiente", "Racing"];
let contador;

for(contador = 0; contador < equipos.length; contador++) {
    console.log("El equipo es " + equipos[contador]);
}

let equipoNuevo = "San Lorenzo"

if(equipoNuevo){
    equipos.push("San Lorenzo");
}

for(contador = 0; contador < equipos.length; contador++) {
    console.log("El equipo es " + equipos[contador]);
}



let numero = 1

while(numero < 11){
    console.log(numero + " es mas chico que 11")
    numero++;
}

fecha = new Date;





function reyesMagos(fecha) {
    fechaReyes = new Date(fecha.getFullYear()+1,0,6);
    if(fecha.getMonth()==0 &&fecha.getDate()<6){
        fechaReyes.setFullYear(fecha.getFullYear());
    }
    tiempo=fechaReyes-fecha;
    alert("Faltan "+ parseInt(tiempo/1000/60/60/24)+ " días para Reyes");
}

function fechaHoy(){
    alert("Hoy es "+ diaSemana()+ ", " + fecha.getDate() + " de "+ mes() + " de " + fecha.getFullYear() + " y son las "+ fecha.getHours()+ ":"+ fecha.getMinutes()+ " horas" );
}


function calcularAreaCirculo(radio){
    
    alert("El área del círculo de radio " + radio + " es " + (Math.PI*Math.pow(radio,2)).toFixed(2)+". \nLa longitud de una circunferencia de radio " + radio + " es " + (2*Math.PI*radio).toFixed(2) + ".");
}

function calcularAleatorio(comienzo, fin) {
    
    alert(Math.random()*(fin-comienzo)+parseInt(comienzo));
}

function mitadCar(cadena){
    alert(cadena.substring(0,cadena.length/2))
}

function ultimoCaracter(cadena){
    alert(cadena.charAt(cadena.length-1));
}

function cadenaInversa(cadena){
    alert(cadena.split("").reverse().join(""));
}

function cadenaGuiones(cadena){
    alert(cadena.split("").join("-"));
}

function contarVocales(cadena){

    let vocales=cadena.match(/a|e|i|o|u/gi);
    alert ("Hay " + vocales.length +" vocales en la cadena.")

}
//reyesMagos(fecha);

function diaSemana(){
    switch (fecha.getDay()) {
        case 0:
            return "domingo";
            break;
        case 1:
            return "lunes";
            break;
        case 2:
            return "martes";
            break;
        case 3:
            return "miércoles";
            break;
        case 4:
            return "jueves";
            break;
        case 5:
            return "viernes";
            break;
        case 6:
            return "sábado";
            break;

    
        default:
            break;
    }
}
function mes() {
    switch (fecha.getMonth()) {
        case 0:
            return "enero";
            break;
        case 1:
            return "febrero";
            break;
        case 2:
            return "marzo";
            break;
        case 3:
            return "abril";
            break;
        case 4:
            return "mayo";
            break;
        case 5:
            return "junio";
            break;
        case 6:
            return "julio";
            break;
        case 7:
            return "agosto";
            break;
        case 8:
            return "septiembre";
            break;
        case 9:
            return "octubre";
            break;
        case 10:
            return "noviembre";
            break;
        case 11:
            return "diciembre";
            break;


    
        default:
            break;
    }
}
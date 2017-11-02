/* crear un array del 1 al 1000 a través crear ptrp qie devieñva cada uno de los elementos +10*/
var numeros=[];
 for (var num=0; num<=1000;num++){
	numeros[num]=num;
}

var Sumados= numeros.map(function(numero){
	return numero+10;
});

console.log("array original: "+numeros);
console.log("con 10 de mas: "+Sumados);


var helados=["chocolate", "frutilla", "zambayon", "dulce de leche", "frutos del bosque"];

var hel= helados.map(function(uppercase){
	return uppercase.toUpperCase();
})

console.log(hel);
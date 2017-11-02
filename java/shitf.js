var planetas= ["Mercurio","Venus","Tierra","Marte","Jupiter","Saturno","Urano","Neptuno","Pluton"];

//metodos de arrays (pueden no recibir parametros)

/* planetas.push("Ofiuco") *agrega un parametro al final del array, por lo que necesita recibir un parametro y devuelve el nuevo tamaño del array*
planetas.pop () *saca el ultimo parametro del array, devuelve wl ultimo elemento *
*/
///console.log(planetas.push(["Ofiuco", "Luna"]));
//console.log (planetas);


//var arrayDestroyed= planetas.pop();
//console.log(planetas);
//console.log(arrayDestroyed);

//var lunaDestroyed=planetas[9].pop();
//console.log("Saco la luna: ", lunaDestroyed);
//console.log(planetas);
/*son solo para los extremos*/

//SHIFT & UNSHIFT son iguales a push y a pop pero para el principio del array

/*for each recorre todo el array y me muestra la resolucion del parametro que le doy
 pasa por la function cada elemento del array


planetas.forEach(function(planeta){
	console.log(planeta);
});*/

planetas.forEach(function(planeta,indice){
console.log("el planeta es "+planeta,"y esta ubicado en"+ indice)
});

/*parametros programados es indice que da el indice, array es otro que sirve para matrices y el contenido)*/

planetas.forEach((e,i,array)=>{
console.log("El planeta es "+ e + "y esta ubicado en "+i+"en su general todos los planetas son "+array);
})


/* nuevo sistema de escritura de javascript
e=elementos del array
i=indice (nos muestra el indice de cada elemento en el array)
array= todos  los elementos del array


`///METODO MAP///////////////////////

/* crea un nuevo array (sin tocar el original) con el resultado de la function que le paso por parametro
*/

var numeros= ´[1,2,3,4,5,6,7];
numeros.map(function(numero){
return numero+2;
});

//la function puede o no recibir parametros, pero son iguales a los del forEach
//se puede guardar en variables tambien como por ejemplo

var numerosMultiplicados=numeros.map(function(numero){
return numero+2;
});

console.log("array original: "+numeros);
console.log("nuevos numeros"+numerosMultiplicados);
var Bicicleta =  function (id,color,modelo,ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo
    this.ubicacion = ubicacion;
}
/*Modelo orientado a objetos bajor el paradigma de prototipos */
Bicicleta.prototype.toString = function (){
    return 'id: '+ this.id + "| color: " + this.color;
}
//Array de bicis por ahora para no usar la base de datos
Bicicleta.allBicis = [];
Bicicleta.add = function(aBici){
    Bicicleta.allBicis.push(aBici);
}
Bicicleta.findById = function(aBiciID){
    var abici = Bicicleta.allBicis.find(x => x.id == aBiciID);
    console.log(abici);
    if(abici)
        return abici;
    else
        throw new Error('No existe una bicicleta con el id seleccionado por favor recargue la página');
}
Bicicleta.removeById = function(aBiciId){
    //var aBici = Bicicleta.findById(aBiciId);
    for(let i = 0 ; i < Bicicleta.allBicis.length; i++){
        if(Bicicleta.allBicis[i].id == aBiciId){
            Bicicleta.allBicis.splice(i, 1);
            break;
        }
    }
}
var a = new Bicicleta(1,'rojo','urbana',[-6.877750, -79.871572]);
var b = new Bicicleta(2,'blanco','urbana',[-6.877925, -79.868124]);

Bicicleta.add(a);
Bicicleta.add(b);
module.exports = Bicicleta;
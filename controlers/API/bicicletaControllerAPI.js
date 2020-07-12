var Bicicleta = require('../../models/bicicleta');

exports.bicicleta_list = function (req,res){
    res.status(200).json({
        bicicletas: Bicicleta.allBicis
    });
}
exports.bicicleta_create = function(req,res){
    var bici = new Bicicleta(req.body.id,req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat, req.body.lng];
    
    Bicicleta.add(bici);
    res.status(200).json({
        bicicleta : bici
    });
}
exports.bicicleta_delete = function (req,res){
    
    Bicicleta.removeById(req.body.id);
    //console.log(req.body.id);
    res.status(204).send();    
}
exports.bicicleta_update = function (req,res){
    var bici = Bicicleta.findById(req.params.id);
    if(bici){
        bici.id = req.body.id;
        bici.color = req.body.color;
        bici.modelo = req.body.modelo;
        bici.ubicacion = [req.body.lat, req.body.lng];
        res.status(200).send();
    }else{
        res.status(500).send();
    }
}
    /*Esto sirve para enviar datos pero por por API, los recibimos y enviamos en formato JSON
    por ejemplo en el list si vamos a Postman y colocamos la url de api/bicicletas esta nos devolver un array de json con los datos de todas las bicicletas
    
    para el etodo exports.bicicleta_create nosotros desde el postman enviamos parametros y los recibimos en contralador de la api 
    los enviamos  en el siguiente formato
    {
    "id": 3,
    "color": "rojo",
    "modelo": "urbana",
    "lat": -6.874699,
    "lng": -79.870082
    }
    la función nos retornará un status en 200 la cuál significará que ha funcionado 
    pondré imágenes un carpeta aparte del proyecto 
    */

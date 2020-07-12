var Bicicleta = require('../models/bicicleta');
exports.Bicicleta_list = function (req,res){
    /*Le estoy diciento a que responda con un render o sea que pinte en mi página que le estoy pidiendo basicamente por los paramatros le digo que en una página ubicada en la carpeta bicicletas está está en mis assets en la carpeta index
    le estoy envianto un objeto bicis este objeto contiene un array de objetos all bicis  */
    /*Parametros del render primero la vista y luego funcion u object */
    res.render('bicicletas/index', {bicis:Bicicleta.allBicis});
}
/*Obtener la página*/
exports.Bicicleta_create_get = function (req, res){
    res.render('bicicletas/create');
}
/*Post es para después de haber la obtenido la página y llenado los datos del formulario estos jalarán los datos */
exports.Bicicleta_create_post = function (req, res){
    /*Req sirve para solicitar datos de la página en este caso estamos creando una nueva bicicleta pero con datos de la página tales como req.body pues va a solicitas del body la etiqueta con id id valga la redundancia le va a solicitar el id y así mismo con el color y el modelo  */
    var bici = new Bicicleta(req.body.id, req.body.color, req.body.modelo);
    bici.ubicacion = [req.body.lat , req.body.lng];
    /*Despues  de sacar los datos añade este objeto a las bicis*/
    console.log(bici.ubicacion);
    Bicicleta.add(bici);
    /*Después de esto nos redirecciona a la vista de bicicletas donde básicamente está el index */
    res.redirect('/bicicletas');
}
exports.Bicicleta_update_get = function(req,res){
    var bici = Bicicleta.findById(req.params.id);
    res.render('bicicletas/update', {bici});
}
exports.Bicicleta_update_post = function(req,res){
    var bici = Bicicleta.findById(req.params.id);
    bici.id = req.body.id;
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lng];

    res.redirect('/bicicletas');
}
exports.Bicicleta_delete_post = function(req,res){
    Bicicleta.removeById(req.body.id);
    res.redirect('/bicicletas');
}
/*Después de haber terminado con las funciones que hemos creado para nuestras bicis vamos a ir a las rutas y le vamos a decir que exporte todo */
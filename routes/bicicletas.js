var express = require('express');
var router = express.Router();
var bicicletaController = require('../controlers/bicicleta');
/*Aqui tenemos definido una ruta que es la base para bicicleta
cuando uuna persona vaya a la url del proyecto/bicicletas los envie al listado de bicicletas */
router.get('/',bicicletaController.Bicicleta_list);
/*Aqui estamos ruteando las funciones */
router.get('/create',bicicletaController.Bicicleta_create_get);
router.post('/create',bicicletaController.Bicicleta_create_post);
router.get('/:id/update',bicicletaController.Bicicleta_update_get);
router.post('/:id/update',bicicletaController.Bicicleta_update_post);
/*Le estamos mandando de parametro al id  */
router.post('/:id/delete',bicicletaController.Bicicleta_delete_post);

/*Simepre añadir un module exports */
module.exports = router;
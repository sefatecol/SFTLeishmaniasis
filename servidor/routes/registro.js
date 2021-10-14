const express = require('express');
const router = express.Router();

// importar el modelo registro
const Registro = require('../models/registro');


// Agregar un registro POST
router.post('/nuevo-registro', async(req, res) => {
    const body = req.body;

    try {
        const registroDB = await Registro.create(body);
        res.status(200).json(registroDB);
    } catch (err) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            err
        })
    }
});

// GET con parámetros de ID
router.get('/registro/:id', async(req, res) => {
    const _id = req.params.id;

    try {
        const registroDB = await Registro.findOne({_id});
        res.json(registroDB);
    } catch (err) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err
        })
    }
});

// Get con todos los documentos ALL
router.get('/registro', async(req, res) => {
    try {
        const registroDB = await Registro.find();
        res.json(registroDB);
    } catch (err) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err
        })
    }
});

// Delete eliminar una nota ID
router.delete('/registro/:id', async(req, res) => {
    const _id = req.params.id;
    try {
        const registroDB = await Registro.findByIdAndDelete({_id});
        if(!registroDB){
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado',
                error
        })
    }
    res.json(registroDB);
    } catch (err) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            err
        })
    }
});

// Put actualizar una nota ID
router.put('/registro/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const registroDB = await Registro.findByIdAndUpdate(
        _id,
        body,
        {new: true});
    res.json(registroDB);
    } catch (err) {
    return res.status(400).json({
        mensaje: 'Ocurrio un error',
        err
        })
    }
});

// Exportamos la configuración de express app
module.exports = router;
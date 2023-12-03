const {Router} = require('express')
const Mascota = require('./mascota.controller');

const router = Router();

router.get('/mascotas', Mascota.getMascotas)
router.get('/mascotas', Mascota.newMascota)

module.exports = router
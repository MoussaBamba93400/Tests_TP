// routes/contactRoutes.js
const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

router.get('/', contactController.getContacts);
router.get('/add', contactController.getAddContact);
router.post('/add', contactController.postAddContact);

module.exports = router;

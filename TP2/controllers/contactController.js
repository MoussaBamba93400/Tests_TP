// controllers/contactController.js
const Contact = require('../models/contact.model');

// Afficher la page d'accueil avec la liste des contacts
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.render('index', { contacts });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Afficher le formulaire d'ajout de contact
exports.getAddContact = (req, res) => {
    res.render('add-contact');
};

// Ajouter un nouveau contact
exports.postAddContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save();
        res.redirect('/');
    } catch (err) {
        res.status(400).send(err.message);
    }
};

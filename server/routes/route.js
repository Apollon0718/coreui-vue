const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');
const Name = require('../models/schoolname');
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserController = require('./user.controller');
const ContactController = require('./contact.controller');

//retrieving contacts

router.get('/contacts', (req, res, next) => {
    Contact.find(function (err, contacts) {
        res.json(contacts);
    })
});

router.get('/contact/:id', ContactController.getContactById);

router.get('/users', (req, res, next) => {
    User.find(function (err, users) {
        res.json(users);
    })
})

router.get('/names', (req, res, next) => {
    Name.find(function (err, names) {
        res.json(names);
    })
});

//add contact
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        schoolname: req.body.schoolname,
        year: req.body.year,
        month: req.body.month,
        week: req.body.week,
        elect_eur: req.body.elect_eur,
        elect_kwh: req.body.elect_kwh,
        heating_eur: req.body.heating_eur,
        heating_kwh: req.body.heating_kwh,
        water_eur: req.body.water_eur,
        water_litres: req.body.water_litres
    });

    newContact.save((err, contact) => {
        if (err) {
            res.json({ msg: 'Failed to add contact' });
        }
        else {
            res.json({ msg: 'Contact added successfully' });
        }
    });
});

//login 
// router.post('/login', async function (req, res, next){
//     email = req.body.email;
//     password = req.body.password;
//     let user = await User.findOne({ 'email': email});
//     let result = await bcrypt.compare(password, user.password); 

//     if (result){
//         console.log('ok aslfjlasfjl;')
//         return {
//             _id: user._id,
//             email: user.email,
//             firstname: user.first_name,
//             lastname: user.last_name,
//             phone: user.phone,
//             token:jwt.sign({ sub: user._id }, 'secretcode_jasndkasjdbajhsbdjhbasjd')
//         };
//     } else {
//         throw Error();
//     }
// });

router.post('/login', UserController.authenticate);


//add user
router.post('/user', async function (req, res, next) {
    //console.log(req.body);
    let newUser = new User({
        email: req.body.email,
        //password: req.body.password,/
        
        first_name: req.body.firstname,
        phone: req.body.phone,
        last_name: req.body.lastname
    })
    newUser.password =await bcrypt.hash(req.body.password, 10);
    console.log(newUser.password);
        newUser.save((err, user) => {
            if (err) {
                res.json({ msg: 'Failed to add user' });
            } else {
                res.json({ msg: 'user added successfully' });
            }
        });
    
});
//add schoolname
router.post('/name', (req, res, next) => {
    //console.log(newName);
    let newName = new Name({
        name: req.body.name
    });

    newName.save((err, name) => {
        if (err) {
            res.json({ msg: 'Failed to add contact' });
        }
        else {
            res.json({ msg: 'name added successfully' });
        }
    });
});



//delete contact
router.delete('/contact/:id', (req, res, next) => {
    Contact.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);;
        }
    });
});

router.delete('/user/:id', (req, res, next) => {
    User.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);;
        }
    });
});

router.delete('/name/:id', (req, res, next) => {
    Name.remove({ _id: req.params.id }, function (err, result) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);;
        }
    });
});

router.put('/contact/:id', function (req, res, next) {
    console.log('afsdfafsadfafdssf')
    Contact.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

module.exports = router;
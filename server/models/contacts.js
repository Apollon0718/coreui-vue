
const mongoose = require('mongoose');



const ContactSchema = mongoose.Schema({

    schoolname:{
        type:String,
        required:true
    },
    year:{
         type:Number,
         required:true
    },

    month:{
        type:Number,
        required:true
    },
    week:{
        type:Number,
       required:true
    },
    elect_eur:{
        type:Number,
        required:true
    },
    elect_kwh:{
        type:Number,
        required:true
    },
    heating_eur:{
        type:Number,
        required:true
    },
    heating_kwh:{
        type:Number,
        required:true
    },
    water_eur:{
        type:Number,
        required:true
    },
    water_litres:{
        type:Number,
        required:true
    }

});


const Contact = module.exports = mongoose.model('Contact',ContactSchema);
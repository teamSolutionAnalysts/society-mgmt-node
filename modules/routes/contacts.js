var express = require('express');
var router = express.Router();
var logger= require('../utils/logger.js');
var mongoose = require('mongoose');

var customerDB = mongoose.connect('mongodb://127.0.0.1:27017/customer');

var contactSchema = mongoose.Schema({
	'first_name': 'string',
	'last_name': 'string',
	'phone':  'string',
	'address_line_1': 'string',
	'address_line_2': 'string',
	'county' : 'string',
	'postcode':  'string'
},{collection:'contacts'});

var Contact = mongoose.model('Contact', contactSchema);

//GET request
router.get('/', function(req, res){
	
	logger.info('Retrieving data from mongodb');
	
	var contactDTO = [];
	
	Contact.find(function(err, contacts){
		if(err){
			res.json({"error":true});
		}else{
			
			for(var i=0; i < contacts.length ; i++ ){
				
				var c = contacts[i];
				
				contactDTO.push(
				{
					"firstName": c.first_name,
					"lastName":c.last_name,
					"addressLine1":c.address_line_1,
					"addressLine2":c.address_line_2,
					"county":c.county,
					"postcode":c.postcode,
					"phone":c.phone
				}
				
				);
			}
			res.json(contactDTO);
		}	
	});
});

//POST request
router.post('/', function(req, res){
	
	logger.info('Inserting Data to mongodb');
	
	var reqContact = req.body;
	
	var c = new Contact({	
		first_name:reqContact.firstName,
		last_name:reqContact.lastName,
		phone: reqContact.phone,
		address_line_1: reqContact.addressLine1,
		address_line_2: reqContact.addressLine2,
		county: reqContact.county,
		postcode: reqContact.postcode
	});
	
	var resMsg = {"success":true};
	
	c.save(function(err, c){
		if (err){
			resMsg = {"error":true};
			logger.error(err);
		} 
	});
	
	res.json(resMsg);
	
});

module.exports = router;
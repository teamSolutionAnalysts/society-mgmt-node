'use strict'
var logger = require('./modules/utils/logger.js');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
var router = express.Router();
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
});
app.use('/', router);

String.prototype.shuffle = function () {
	var a = this.split(""),
		n = a.length;

	for (var i = n - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var tmp = a[i];
		a[i] = a[j];
		a[j] = tmp;
	}
	return a.join("");
}

Array.prototype.shuffleOne = function () {
	var i = this.length, j, temp;
	if (i == 0) return this;
	while (--i) {
		j = Math.floor(Math.random() * (i + 1));
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this[0];
}

router.post('/auth/signup', (req, res) => {
	logger.info(req.body);
	const body = req.body;
	if (body.email == 'jm@example.com') {
		res.status(400).json({
			'error': 'User is already register with email address.'
		})
	} else {
		res.json({
			'token': 'RvuUBKcNCL5q'.shuffle(),
			'msg': 'User is signed up successfully'
		})
	}
});

router.post('/auth/login', (req, res) => {
	logger.info(req.body);
	const body = req.body;
	if (body.email == 'jm@example.com') {
		res.status(400).json({
			'error': 'User name and password don\'t match'
		})
	} else {
		res.json({
			'token': 'RvuUBKcNCL5q'.shuffle(),
			'msg': 'User is logged in successfully'
		})
	}
});

router.post('/auth/forgot', (req, res) => {
	logger.info(req.body);
	const body = req.body;
	if (body.email == 'jm@example.com') {
		res.status(500).json({
			'error': 'Internal server error! Please try again later'
		})
	} else {
		res.json({
			'msg': 'If you are registered user, you should receive email with reset password instruction'
		})
	}
});

router.get('/vehicle/list-all', (req, res) => {
	logger.info(req.body);
	logger.info(req.headers);
	const name = ['Jay', 'Hardik', 'Dinesh', 'Hiro', 'Govind', 'Nidhi', 'Zalak', 'Anish', 'Ifthekhar', 'Parth'];
	const lname = ['Mehta', 'Chuahan', 'Vaghasiya', 'Patel', 'Zala', 'Joshi', 'Patels', 'Cool', 'Dani', 'Adroja'];

	const series = ['AA', 'AK', 'QK', 'PP', 'ZA', 'JO', 'PA', 'CO', 'DA', 'AD'];

	const vehicles = [
		{
			photo: 'https://media.zigcdn.com/media/model/2013/May/hero_moto_corp_passion_pro_right_side_view_640x480.jpg',
			type: 'Bike',
			color: 'Red'
		},
		{
			photo: 'https://media.zigcdn.com/media/model/2016/Feb/suzuki_gixxersf_420x210.jpg',
			type: 'Bike',
			color: 'Blue'
		},
		{
			photo: 'https://imgd.aeplcdn.com//476x268//bw/models/suzuki-gixxer.jpg?20171702202428',
			type: 'Bike',
			color: 'Black'
		},
		{
			photo: 'http://static.financialexpress.com/m-images/M_Id_481237_Suzuki_Gixxer.jpg',
			type: 'Bike',
			color: 'Red'
		},
		{
			photo: 'https://www.honda.com.au/content/dam/honda/cars/models/jazz-2014/showroom/colorpicker/jazz-2014--brilliant-sporty-blue-metallic--small.png',
			type: 'Car',
			color: 'Blue'
		},
		{
			photo: 'http://www.honda.co.uk/content/dam/central/cars/rvtd/jazz/Jazz_f34.png/_jcr_content/renditions/c3.png',
			type: 'Car',
			color: 'Red'
		},
		{
			photo: 'https://www.hondacarindia.com/Areas/Jazz/Content/desktop/images/colorChange/taffeta-white.png',
			type: 'Car',
			color: 'White'
		},
		{
			photo: 'http://www.herocycles.com/image/data/New-Bikes/Empress.jpg',
			type: 'Cycle',
			color: 'White'
		},
		{
			photo: 'http://www.herocycles.com/image/data/3470-CROSS-ROAD.png',
			type: 'Cycle',
			color: 'Black'
		},
		{
			photo: 'https://rukminim1.flixcart.com/image/704/704/cycle/w/z/s/s365bbdbl02-hero-10-blossam-original-imaemsrfpw6pgbpg.jpeg?q=70',
			type: 'Cycle',
			color: 'Blue'
		},
		{
			photo: 'http://www.herocycles.com/image/data/3723-ROYAL-CLASSIC.png',
			type: 'Cycle',
			color: 'Black'
		},
		{
			photo: 'http://polaris.hs.llnwd.net/o40/ind/2017/img/vehicles/beauty-shot-1/2017/scout-sixty-thunder-black.xxs.jpg',
			type: 'Bike',
			color: 'Black'
		},
		{
			photo: 'https://robbreportedit.files.wordpress.com/2016/08/01-lotus-motorcycle-c01-lotus-141.jpg',
			type: 'Bike',
			color: 'Coffee'
		},
		{
			photo: 'http://www.telegraph.co.uk/cars/images/2015/12/14/Ducati_959_Panigale_19-xlarge_trans_NvBQzQNjv4BqrpfQw2hJyG_yckwxPAr0gqsW2GA9nAM4IFtGNFTInME.jpg',
			type: 'Bike',
			color: 'White'
		}

	]
	let list = [];
	for (let i = 0; i <= 50; i++) {
		const v = vehicles.shuffleOne();
		list.push({
			_id: '_' + '5HhvnN7qxWdrgGnQUh2fqyTY'.shuffle(),
			regNumber: 'GJ-03-' + series.shuffleOne() + '-' + Math.round(Math.random() * 10000),
			user: {
				name: name.shuffleOne() + ' ' + lname.shuffleOne(),
				number: '' + Math.round(Math.random() * 1000000000000)
			},
			photo: v.photo,
			type: v.type,
			color: v.color
		});
	}

	try {
		if (!req.headers['authorization']) {
			res.status(403).json({
				'error': 'Missing auth token!'
			})
		}
		if (req.headers['authorization'] == 'JWT UNJMAUTHTOKEN') {
			res.status(401).json({
				'error': 'Invalid or Expired token'
			})
		} else {
			res.json(list);
		}
	} catch (e) {
		res.status(500).json({ 'error': 'Internale server error' });
	}
});


router.post('/vehicle/add', (req, res) => {
	logger.info(req.body);
	const body = req.body;

	try {
		if (!req.headers['authorization']) {
			res.status(403).json({
				'error': 'Missing auth token!'
			})
		}
		if (req.headers['authorization'] == 'JWT UNJMAUTHTOKEN') {
			res.status(401).json({
				'error': 'Invalid or Expired token'
			})
		} else {
			if (body.type == 'arrowplane') {
				res.status(400).json({
					'error': 'Arrowplane is invalid type! try with vehicle can be parked in society parking'
				})
			} else {
				res.json({
					'msg': 'Vehicle added successfully! Woopieee....'
				})
			}
		}
	} catch (e) {
		res.status(500).json({ 'error': 'Internale server error' });
	}
});

router.get('/vehicle/my', (req, res) => {
	logger.info(req.body);
	const body = req.body;

	try {
		if (!req.headers['authorization']) {
			res.status(403).json({
				'error': 'Missing auth token!'
			})
		}
		if (req.headers['authorization'] == 'JWT UNJMAUTHTOKEN') {
			res.status(401).json({
				'error': 'Invalid or Expired token'
			})
		} else {
			if (body.type == 'arrowplane') {
				res.status(400).json({
					'error': 'Arrowplane is invalid type! try with vehicle can be parked in society parking'
				})
			} else {
				res.json([
					{
						"_id": "_nv5q2nNrYqGUxgWHyhTdhf7Q",
						"regNumber": "GJ-03-ZA-5255",
						"user": {
							"name": "Anish Patel",
							"number": "133735569910"
						},
						"photo": "http://www.herocycles.com/image/data/3723-ROYAL-CLASSIC.png",
						"type": "Cycle",
						"color": "Black"
					},
					{
						"_id": "_qhTGn2rUWfxvH7QnYhydNq5g",
						"regNumber": "GJ-03-AD-3449",
						"user": {
							"name": "Zalak Adroja",
							"number": "871578529637"
						},
						"photo": "http://www.herocycles.com/image/data/3470-CROSS-ROAD.png",
						"type": "Cycle",
						"color": "Black"
					},
					{
						"_id": "_5TG2fNqxrhvQdq7WhnUYHnyg",
						"regNumber": "GJ-03-AA-2993",
						"user": {
							"name": "Jay Chuahan",
							"number": "874822911573"
						},
						"photo": "http://polaris.hs.llnwd.net/o40/ind/2017/img/vehicles/beauty-shot-1/2017/scout-sixty-thunder-black.xxs.jpg",
						"type": "Bike",
						"color": "Black"
					},
					{
						"_id": "_5GYHQW7fTqgdUqrNhx2nvhny",
						"regNumber": "GJ-03-AA-5740",
						"user": {
							"name": "Jay Adroja",
							"number": "478188093298"
						},
						"photo": "http://static.financialexpress.com/m-images/M_Id_481237_Suzuki_Gixxer.jpg",
						"type": "Bike",
						"color": "Red"
					},
					{
						"_id": "_7dTY5nvyQWGngUq2qxrNhHhf",
						"regNumber": "GJ-03-PA-8420",
						"user": {
							"name": "Govind Patel",
							"number": "778307580173"
						},
						"photo": "https://imgd.aeplcdn.com//476x268//bw/models/suzuki-gixxer.jpg?20171702202428",
						"type": "Bike",
						"color": "Black"
					}]);
			}
		}
	} catch (e) {
		res.status(500).json({ 'error': 'Internale server error' });
	}
});

router.delete('/vehicle/:id', (req, res) => {
	logger.info(req.body);
	const body = req.body;

	try {
		if (!req.headers['authorization']) {
			res.status(403).json({
				'error': 'Missing auth token!'
			})
		}
		if (req.headers['authorization'] == 'JWT UNJMAUTHTOKEN') {
			res.status(401).json({
				'error': 'Invalid or Expired token'
			})
		} else {
			if (req.params['id'] == '_nv5q2nNrYqGUxgWHyhTdhf7Q') {
				res.status(400).json({
					'error': 'Vehicle you are trying to delete is not exist.'
				})
			} else {
				res.json({
					'msg': 'Vehicle deleted successfully!... Ohh!'
				})
			}
		}
	} catch (e) {
		res.status(500).json({ 'error': 'Internale server error' });
	}
});

router.put('/vehicle/:id', (req, res) => {
	logger.info(req.body);
	const body = req.body;

	try {
		if (!req.headers['authorization']) {
			res.status(403).json({
				'error': 'Missing auth token!'
			})
		}
		if (req.headers['authorization'] == 'JWT UNJMAUTHTOKEN') {
			res.status(401).json({
				'error': 'Invalid or Expired token'
			})
		} else {
			if (req.params['id'] == '_nv5q2nNrYqGUxgWHyhTdhf7Q') {
				res.status(400).json({
					'error': 'Vehicle you are trying to Update is not exist.'
				})
			} else {
				res.json({
					'msg': 'Vehicle updated successfully!... Cool!'
				})
			}
		}
	} catch (e) {
		res.status(500).json({ 'error': 'Internale server error' });
	}
});
logger.info('Starting the server');

var server = app.listen(3000, function () {
	logger.info('Server started...');
});
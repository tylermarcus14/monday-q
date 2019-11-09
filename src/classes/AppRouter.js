const {
	version
} = require('../../package');

const Seller = require('../models/Seller');
const Product = require('../models/Product');
const User = require('../models/User');
const Article = require('../models/Article');

const NewProduct = require('../models/NewProduct');

const Notify = require('../classes/Notify');
const Twilio = require('../../twilio');
const proxyUtil = require('../utils/proxy');
const moment = require('moment');
const fs = require('fs');
const parseUrl = require("parse-url");
const multer = require('multer')
const upload = multer({
	dest: 'uploads/'
})
const passport = require('passport');
require('../config/passport')(passport);

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

let randomColors = [
	'#007bff'
]


class AppRouter {

	constructor(app) {
		this.app = app;
		this.setupRouters();
	}

	setupRouters() {
		const app = this.app;

		app.get('/', (req, res, next) => {
			Article
				.find({ featured: true })
				.limit(1)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let featured = [];

					for (let i = 0; i < articles.length; i++) {
						
						var snipet = articles[i].article.split(" ").splice(0,16).join(" ");

						featured.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							snipet: snipet,
							imageURL: articles[i].imageURL
						})
					}
			Article
				.find({ featured: false })
				.limit(5)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('home', {
						featured: featured,
						articles: articlesList,
					});
				});
			});
		});
		app.get('/pga-tour', (req, res, next) => {
			Article
				.find({category: 'pga-tour'})
				.limit(10)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('pgatour', {
						articles: articlesList,
					});
				});
		});

		app.get('/korn-ferry-tour', (req, res, next) => {
			Article
				.find({category: 'korn-ferry-tour'})
				.limit(10)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('kornferrytour', {
						articles: articlesList,
					});
				});
		});

		app.get('/lpga-tour', (req, res, next) => {
			Article
				.find({category: 'lpga-tour'})
				.limit(10)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('lpgatour', {
						articles: articlesList,
					});
				});
		});

		app.get('/pga-tour-champions', (req, res, next) => {
			Article
				.find({category: 'pga-tour-champions'})
				.limit(10)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('pgatourchampions', {
						articles: articlesList,
					});
				});
		});

		app.get('/mackenzie-tour', (req, res, next) => {
			Article
				.find({category: 'mackenzie-tour'})
				.limit(10)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('mackenzietour', {
						articles: articlesList,
					});
				});
		});

		app.get('/pga-tour-latinoamerica', (req, res, next) => {
			Article
				.find({category: 'pga-tour-latinoamerica'})
				.limit(10)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('pgatourlatinoamerica', {
						articles: articlesList,
					});
				});
		});

		app.get('/pga-tour-china', (req, res, next) => {
			Article
				.find({category: 'pga-tour-china'})
				.limit(10)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('pgatourchina', {
						articles: articlesList,
					});
				});
		});

		app.get('/qschool', (req, res, next) => {
			Article
				.find({category: 'qschool'})
				.limit(10)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('qschool', {
						articles: articlesList,
					});
				});
		});

		app.get('/podcasts', (req, res, next) => {
			Article
				.find({category: 'podcasts'})
				.limit(10)
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('podcasts', {
						articles: articlesList,
					});
				});
		});

		app.get('/login', (req, res, next) => {
			return res.render('login', {});
		});

		app.get('/dashboard', ensureAuthenticated, (req, res, next) => {
			return res.render('dashboard', {});
		});
		


			// Login
		app.post('/login/success', (req, res, next) => {
			passport.authenticate('local', {
			successRedirect: '/dashboard',
			failureRedirect: '/login',
			failureFlash: true
			})(req, res, next);
		});
		

		// Logout
		app.get('/logout/sucess', function(req, res){
			req.logout();
			res.redirect('/');
		  });

		
  
		app.get('/register', (req, res, next) => {

			return res.render('register', {});
		});


		app.post('/register/success', (req, res, next) => {
			let newUser = new User({
				email: req.body.email,
				password: req.body.password,
				name: req.body.name
			});

			User.createUser(newUser, function(err, User){
				if (err) {
					return res.json({
						message: 'Please try again.',
						error: true
					})
				} else {
					User.save();
					req.flash(
					'success_msg', 'You have successfully registerd.');
					return res.redirect('/login');
			}
		});
		});



		app.get('/posts', ensureAuthenticated, (req, res, next) => {

			Article
				.find()
				.sort('-dateAdded')
				.exec(function(err, articles) {

					let articlesList = [];

					for (let i = 0; i < articles.length; i++) {
						
						var day = articles[i].dateAdded.toString().substring(0,15);

						articlesList.push({
							_id: articles[i]._id,
							title: articles[i].title,
							category: articles[i].category,
							article: articles[i].article,
							imageURL: articles[i].imageURL,
							dateAdded: day
						})
					}

					return res.render('posts', {
						articles: articlesList,
						count: (articles.length == 1) ? '1 Article' : `${articles.length} Articles`,
					});

				});

		});

		app.get('/posts/new', ensureAuthenticated, (req, res, next) => {

			Seller
				.find({userEmail: req.user.email})
				.exec(function(err, stores) {

					let storesList = [];

					for (let i = 0; i < stores.length; i++) {
						storesList.push({
							// color: randomColors[Math.floor(Math.random() * randomColors.length)],
							proxies: stores[i].proxies,
							keywords: stores[i].keywords,
							_id: stores[i]._id,
							url: stores[i].url,
							lastItemAdded: stores[i].lastItemAdded,
							lastItemCount: stores[i].lastItemCount,
							pollMS: stores[i].pollMS
						})
					}

					return res.render('posts_new', {
						stores: storesList,
						count: (stores.length == 1) ? '1 Post' : `${stores.length} Posts`,
						needsRestart: global.needsRestart
					});

				});

		});

		app.post('/posts/new/add', (req, res, next) => {

			if (req.body.category == '' || req.body.title == '' ) {
				return res.json(200, {
					message: 'Missing important fields to add article please try again',
					error: true
				})
			}

			let newArticle = new Article({
				userName: req.user.name,
				category: req.body.category,
				title: req.body.title,
				article: req.body.article,
				featured: req.body.featured,
				imageURL: req.body.url,
				dateAdded: moment(),
				storeHash: null
			});

			newArticle.save();

			return res.redirect('/posts');

		});

		app.get('/settings', ensureAuthenticated, (req, res, next) => {

			fs.readFile(__dirname + '/../../config.json', function(err, data) {
				let dataToAppend = JSON.parse(data);

				if (dataToAppend.discord.active) {
					dataToAppend.discord.active = 'checked'
				}

				if (dataToAppend.slack.active) {
					dataToAppend.slack.active = 'checked'
				}

				console.log(dataToAppend)

				return res.render('settings', {
					settings: dataToAppend
				});
			});

		});

		app.post('/settings/update', (req, res, next) => {

			fs.readFile(__dirname + '/../../config.json', function(err, data) {

				let dataToAppend = JSON.parse(data);

				let discord = false;
				let slack = false;

				if (req.body.slackBotActive == 'on') {
					slack = true;
				}

				if (req.body.discordActive == 'on') {
					discord = true;
				}

				let newConfig = {
					"port": dataToAppend.port,
					"mongodb_uri": dataToAppend.mongodb_uri,
					"slack": {
						"active": slack,
						"webhook_url": req.body.webhook_url_slack
					},
					"discord": {
						"active": discord,
						"webhook_url": req.body.webhook_url_discord
					}
				}

				global.config = newConfig;

				fs.writeFile(__dirname + '/../../config.json', JSON.stringify(newConfig, null, 4), function(err) {
					return res.redirect('/settings');
				});

			});

		});


		app.get('/features', (req, res, next) => {

			return res.render('features', {});
		});

	
		app.get('/contact', (req, res, next) => {

			return res.render('contact', {});
		});
	

		app.get('/alerts', ensureAuthenticated, (req, res, next) => {
		
			let storesList = [];
			let newItems = [];
			let isEmpty = true;

			Product
				.find({userEmail: req.user.email})
				.exec(function(err, products) {

					let productsList = [];

					for (let i = 0; i < products.length; i++) {
						productsList.push({
							_id: products[i]._id,
							url: products[i].url,
							// image: products[i].res.img,
							// title: products[i].res.title,
							seller: products[i].seller,
							dateAdded: moment()
						})
					}

					NewProduct
					.find({userEmail: req.user.email})
					.sort('-dateAdded')
					.exec(function(err, products) {

						for (let i = 0; i < products.length; i++) {
							newItems.push({
								// color: randomColors[Math.floor(Math.random() * randomColors.length)],
								url: products[i].url,
								image: products[i].image,
								dateAdded: products[i].dateAdded,
								site: products[i].site,
								title: products[i].title,
								price: products[i].price,
								_id: products[i]._id


							})
						}

						if (newItems.length > 0) {
							isEmpty = false;
						}

						return res.render('alerts', {
							status: global.status,
							stores: storesList,
							needsRestart: global.needsRestart,
							startTime: global.startTime,
							newItems: newItems,
							isEmpty: isEmpty,
							products: productsList,
							count: (products.length == 1) ? '1 Product' : `${products.length} Products`,
							needsRestart: global.needsRestart
						});

					});

				});

		});


		app.get('/products', ensureAuthenticated, (req, res, next) => {
		
			let storesList = [];
			let newItems = [];
			let isEmpty = true;

			Product
				.find({userEmail: req.user.email})
				.exec(function(err, products) {

					let productsList = [];

					for (let i = 0; i < products.length; i++) {
						productsList.push({
							_id: products[i]._id,
							url: products[i].url,
							// image: products[i].res.img,
							// title: products[i].res.title,
							seller: products[i].seller,
							dateAdded: moment()
						})
					}

					NewProduct
					.find({userEmail: req.user.email})
					.sort('-dateAdded')
					.exec(function(err, products) {

						for (let i = 0; i < products.length; i++) {
							newItems.push({
								// color: randomColors[Math.floor(Math.random() * randomColors.length)],
								url: products[i].url,
								image: products[i].image,
								dateAdded: products[i].dateAdded,
								site: products[i].site,
								category: products[i].category,
								title: products[i].title,
								price: products[i].price,
								_id: products[i]._id


							})
						}

						if (newItems.length > 0) {
							isEmpty = false;
						}

						return res.render('products', {
							status: global.status,
							stores: storesList,
							needsRestart: global.needsRestart,
							startTime: global.startTime,
							newItems: newItems,
							isEmpty: isEmpty,
							products: productsList,
							count: (products.length == 1) ? '1 Product' : `${products.length} Products`,
							needsRestart: global.needsRestart
						});

					});

				});

		});


		app.get('/settings/sms/test', (req, res, next) => {

			Twilio();

			return res.redirect('/settings');

		});

		app.get('/settings/slack/test', (req, res, next) => {

			fs.readFile(__dirname + '/../../config.json', function(err, data) {
				Notify.slackTest(JSON.parse(data).slack.webhook_url);
			});

			return res.redirect('/settings');

		});


		app.get('/products/remove', (req, res, next) => {
			NewProduct.deleteMany(({userEmail: req.user.email}), function(err) {})
			Product.deleteMany(({userEmail: req.user.email}), function(err) {
				if (err) {
					return res.json({
						message: 'No products to remove.',
						error: true
					})
				} else {
					global.stopTasks();
				}
				return res.redirect('/products');

			});		
		});


		
		app.get('/article/delete/:id', (req, res, next) => {
			Article.findOneAndRemove({
				_id: req.params.id
			}, function(err) {
				if (err) {
					return res.json({
						message: 'Article not found',
						error: true
					})
				} else {
					global.stopTasks();
					return res.redirect('/posts');
				}
			});
		});
	
	
		app.get('/product/delete/:id', (req, res, next) => {
			NewProduct.findOneAndRemove({
				_id: req.params.id
			}, function(err) {
				if (err) {
					return res.json({
						message: 'Product not found',
						error: true
					})
				} else {
					global.stopTasks();
					return res.redirect('/products');
				}
			});
		});

		app.get('/products/search', ensureAuthenticated, (req, res, next) => {
			let search2 = ('search ' + req.params.value)
			let searchterm = 'ICON Sticker Pack'
			let storesList = [];
			let newItems = [];
			let isEmpty = true;

			Product
				.find({})
				.exec(function(err, products) {

					let productsList = [];

					for (let i = 0; i < products.length; i++) {
						productsList.push({
							_id: products[i]._id,
							url: products[i].url,
							// image: products[i].res.img,
							// title: products[i].res.title,
							seller: products[i].seller,
							dateAdded: moment()
						})
					}

					NewProduct
					.find({ title: searchterm })
					.sort('-dateAdded')
					.exec(function(err, products) {
						console.log(req.body)
						console.log(searchterm)
						console.log(search2)

						for (let i = 0; i < products.length; i++) {
							newItems.push({
								// color: randomColors[Math.floor(Math.random() * randomColors.length)],
								url: products[i].url,
								image: products[i].image,
								dateAdded: products[i].dateAdded,
								site: products[i].site,
								title: products[i].title,
								price: products[i].price,
								_id: products[i]._id


							})
						}
						return res.render('products', {
							status: global.status,
							stores: storesList,
							needsRestart: global.needsRestart,
							startTime: global.startTime,
							newItems: newItems,
							isEmpty: isEmpty,
							products: productsList,
							count: (products.length == 1) ? '1 Product' : `${products.length} Products`,
							needsRestart: global.needsRestart
						});

					});
		});
	});

		app.get('/products/search', ensureAuthenticated, (req, res, next) => {
			let search2 = ('search ' + req.params.value)
			let searchterm = 'ICON Sticker Pack'
			let storesList = [];
			let newItems = [];
			let isEmpty = true;

			Product
				.find({})
				.exec(function(err, products) {

					let productsList = [];

					for (let i = 0; i < products.length; i++) {
						productsList.push({
							_id: products[i]._id,
							url: products[i].url,
							// image: products[i].res.img,
							// title: products[i].res.title,
							seller: products[i].seller,
							dateAdded: moment()
						})
					}

					NewProduct
					.find({ title: searchterm })
					.sort('-dateAdded')
					.exec(function(err, products) {
						console.log(req.body)
						console.log(searchterm)
						console.log(search2)

						for (let i = 0; i < products.length; i++) {
							newItems.push({
								// color: randomColors[Math.floor(Math.random() * randomColors.length)],
								url: products[i].url,
								image: products[i].image,
								dateAdded: products[i].dateAdded,
								site: products[i].site,
								title: products[i].title,
								price: products[i].price,
								_id: products[i]._id


							})
						}
						return res.render('products', {
							status: global.status,
							stores: storesList,
							needsRestart: global.needsRestart,
							startTime: global.startTime,
							newItems: newItems,
							isEmpty: isEmpty,
							products: productsList,
							count: (products.length == 1) ? '1 Product' : `${products.length} Products`,
							needsRestart: global.needsRestart
						});

					});
		});
	});


		// app.get('/products/:search', (req, res) => {
		// 	NewProduct.find({ title: req.body.search }, (err, s) => {
		// 		return res.render('products', s);
		// 	});

		// });

		app.get('/product/:search', (req, res) => {

			NewProduct.findById(req.params.search, (err, s) => {
				return res.render('product', s);
				
			});

		});

		app.post('/product/update/:id', (req, res) => {

			NewProduct.findById(req.params.id, (err, s) => {

				if (err) return res.redirect('/products');

				s.pollMS = parseInt(req.body.pollMS);
				s.proxies = (req.body.proxies == '') ? [] : proxyUtil.formatList(req.body.proxies.replace(/\r/g, '').split('\n'))
				s.keywords = (req.body.keywords == '') ? [] : req.body.keywords.replace(/\r/g, '').split('\n');

				s.save();
				global.stopTasks();

				setTimeout(() => {
					return res.redirect(`/product/${req.params.id}`);
				}, 1500);

			});

		});

		// app.post('/stores/addFile', upload.single('sitelist'), (req, res, next) => {

		// 	if (req.body.file == '' || req.body.pollMS == '') {
		// 		return res.json(200, {
		// 			message: 'Missing important fields to add store, please try again',
		// 			error: true
		// 		})
		// 	}

		// 	const siteList = fs.readFileSync(req.file.path).toString().split('\n');

		// 	for (let i = 0; i < siteList.length; i++) {
		// 		if (siteList[i] != '') {
		// 			let newStore = new Seller({
		// 				url: parseUrl(siteList[i]).resource,
		// 				lastItemAdded: null,
		// 				lastItemCount: null,
		// 				proxies: (req.body.proxies == '') ? [] : proxyUtil.formatList(req.body.proxies.replace(/\r/g, '').split('\n')),
		// 				keywords: (req.body.keywords == '') ? [] : req.body.keywords.replace(/\r/g, '').split('\n'),
		// 				pollMS: req.body.pollMS,
		// 				dateAdded: moment(),
		// 				storeHash: null
		// 			});
		// 			newStore.save();
		// 		}
		// 	}
		// 	global.stopTasks();
		// 	return res.redirect('/stores');

		// });

		// app.get('/qschool/:id', (req, res) => {

		// 	Article.findById(req.params.id, (err, s) => {
		// 		if (s) {
		// 			return res.render('post', s);
		// 		} else {
		// 			return res.json({
		// 				message: 'Error Occured while trying to find: ' + req.params.id,
		// 				error: true
		// 			})
		// 		}
		// 	});

		// });
		app.get('/edit', ensureAuthenticated, (req, res, next) => {
			return res.render('404', {});
		});

		app.get('/edit/:id', ensureAuthenticated, (req, res, next) => {
			Article.findById(req.params.id, (err, s) => {
				if (s) {
					return res.render('post_edit', s);
				} else {
					return res.json({
						message: 'Error Occured while trying to find: ' + req.params.id,
						error: true
					})
				}
			});
		});



		app.post('/post/update/:id', (req, res) => {

			Article.findById(req.params.id, (err, s) => {

				if (err) return res.redirect('/posts');

				s.article = req.body.articleText1;
				s.save();

				setTimeout(() => {
					return res.redirect(`/posts`);
				}, 1500);

			});

		});

		app.get('/:category/:id', (req, res) => {

			Article.findById(req.params.id, (err, s) => {
				if (s) {
					return res.render('post', s);
				} else {
					return res.render('404', s);

				}
			});

		});

		//The 404 Route (ALWAYS Keep this as the last route)
		app.get('*', (req, res, next) => {
			return res.render('404', {});
		});

	}

}

module.exports = AppRouter;
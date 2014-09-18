var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'weddings';

	view.query('galleries', keystone.list('Gallery').model.find().populate('categories').sort('sortOrder'));
	
	// Render the view
	view.render('weddings');
	
};

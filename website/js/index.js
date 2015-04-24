$(function() {

	// grab the elements and define variables
	var selectors = {
		ncImage: $('#nc-img'),
		uncwImage: $('#uncw-img'),
		vtImage: $('#vt-img'),
		atxImage: $('#austin-img'),
		lightImage: $('#light-img'),
		tthImage: $('#tth-img'),
		bugImage: $('#bugs-img'),
		weddingImage: $('#wedding-img'),
		wickedImage: $('#wicked-img'),
		nowAndThenImage: $('#then_now-img'),
		chickenImage: $('#chicken-img'),
		chocImage: $('#choc-img'),
		benImage: $('#ben-img'),
		ncDescription: $('#nc-description'),
		uncwDescription: $('#uncw-description'),
		vtDescription: $('#vt-description'),
		atxDescription: $('#atx-description'),
		lightDescription: $('#lightbulb-description'),
		teamTreeDescription: $('#team-tree-description'),
		bugsDescription: $('#bugs-description'),
		boulderDescription: $('#boulder-description'),
		wickedDescription: $('#wicked-description'),
		nowAndThenDescription: $('#now-then-description'),
		chickenDescription: $('#chicken-description'),
		chocDescription: $('#choc-description'),
		benDescription: $('#ben-description'),
		historyBtn: $('#history-btn'),
		hobbieBtn: $('#hobbies-btn'),
		timeLine: $('#time-line'),
		hobbies: $('#hobbies-facts')
	};

	// hide all sections and descriptions
	selectors.timeLine.hide();
	selectors.hobbies.hide();
	selectors.ncDescription.hide();
	selectors.uncwDescription.hide();
	selectors.vtDescription.hide();
	selectors.atxDescription.hide();
	selectors.lightDescription.hide();
	selectors.teamTreeDescription.hide();
	selectors.bugsDescription.hide();
	selectors.boulderDescription.hide();
	selectors.wickedDescription.hide();
	selectors.nowAndThenDescription.hide();
	selectors.chickenDescription.hide();
	selectors.chocDescription.hide();
	selectors.benDescription.hide();



	// events

	// show timeline/history or randoms/hobbies:
	selectors.historyBtn.on('click', function() {
		selectors.timeLine.slideToggle('slow');
	});

	selectors.hobbieBtn.on('click', function() {
		selectors.hobbies.slideToggle('slow');
	});

	// show selected description
	selectors.ncImage.on('click', function() {
		selectors.ncDescription.slideToggle('slow');
	});

	selectors.uncwImage.on('click', function() {
		selectors.uncwDescription.slideToggle('slow');
	});

	selectors.vtImage.on('click', function() {
		selectors.vtDescription.slideToggle('slow');
	});

	selectors.atxImage.on('click', function() {
		selectors.atxDescription.slideToggle('slow');
	});

	selectors.lightImage.on('click', function() {
		selectors.lightDescription.slideToggle('slow');
	});

	selectors.tthImage.on('click', function() {
		selectors.teamTreeDescription.slideToggle('slow');
	});

	selectors.bugImage.on('click', function() {
		selectors.bugsDescription.slideToggle('slow');
	});

	selectors.weddingImage.on('click', function() {
		selectors.boulderDescription.slideToggle('slow');
	});

	selectors.wickedImage.on('click', function() {
		selectors.wickedDescription.slideToggle('slow');
	});

	selectors.nowAndThenImage.on('click', function() {
		selectors.nowAndThenDescription.slideToggle('slow');
	});

	selectors.chickenImage.on('click', function() {
		selectors.chickenDescription.slideToggle('slow');
	});

	selectors.chocImage.on('click', function() {
		selectors.chocDescription.slideToggle('slow');
	});

	selectors.benImage.on('click', function() {
		selectors.benDescription.slideToggle('slow');
	});

}();

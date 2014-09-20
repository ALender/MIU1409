var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var firearmContainer = require('firearmContainer');

var firearmData = require('Json');

// create tab group
var tabGroup = Titanium.UI.createTabGroup({
	barColor : '#383B3A',
	tabsTintColor : '#383B3A',
});

var win1 = Titanium.UI.createWindow({
	title : 'Para USA',
	backgroundImage : 'images/bg_body.jpg',
});
var tab1 = Titanium.UI.createTab({
	icon : 'tab1icon.png',
	title : 'Home',
	window : win1,
	icon : 'images/TabImages/home-7.png',
});

var win2 = Titanium.UI.createWindow({
	title : 'Firearms List',
	backgroundColor : '#fff'
});
var tab2 = Titanium.UI.createTab({
	icon : 'tab2icon.png',
	title : 'Firearms',
	window : win2,
	icon : 'images/TabImages/file-list-7.png',
});

var win3 = Titanium.UI.createWindow({
	title : 'About Us',
	backgroundImage : 'images/bg_body.jpg'
});
var tab3 = Titanium.UI.createTab({
	icon : 'tab1icon.png',
	title : 'About Us',
	window : win3,
	icon : 'images/TabImages/message-7.png',
});

var win4 = Titanium.UI.createWindow({
	title : 'Specials',
	backgroundImage : 'images/bg_body.jpg',
});
var tab4 = Titanium.UI.createTab({
	icon : 'tab2icon.png',
	title : 'Specials',
	window : win4,
	icon : 'images/TabImages/shopping-cart-7.png',
});

//Adding to win1
var logoView = Titanium.UI.createView({
	backgroundImage : 'images/logo.png',
	top : 0,
	height : 50,
	width : 150,
});

var aniView1 = Titanium.UI.createView({
	backgroundImage : 'images/HSimages/TomaiseBan.png',
});
aniView1.addEventListener('click', function(e) {
	
});
var aniView2 = Titanium.UI.createView({
	backgroundImage : 'images/HSimages/EliteProBan.png',
});
var aniView3 = Titanium.UI.createView({
	backgroundImage : 'images/HSimages/BlackOpsBan.png',
});
var scrollable = Titanium.UI.createScrollableView({
	height : 175,
	top : 51,
	views : [aniView1, aniView2, aniView3],
	showPagingControl : false,
	//showHorizontalScrollIndicator: true,
});

var ar = scrollable.getViews();
var t = 0;
setInterval(function(e) {
    if(t >= ar.length) {
        t = 0;
    }
    scrollable.scrollToView(t);
    t++;
 
}, 2500);

var playerView = Ti.UI.createImageView({
	image: 'images/Para4Life.png',
	width: 'auto',
	height: 225,
	bottom: 5,
});

playerView.addEventListener('click', function(e) {
	Ti.Platform.openURL('http://www.youtube.com/watch?v=vh_LSWfi9Gk');
});


//add to win2

var searchbar = Ti.UI.createSearchBar({
	barColor: '#383B3A',
	showCancel: false
});
var listTab = Ti.UI.createTableView({
	search: searchbar,
});

listTab.addEventListener('click', function(e) {
	tabGroup.activeTab.open(firearmContainer.openFireArmContainer(e.source.info));
});

for (category in firearmData.array) {
	Ti.API.info('Iteration for  ' + category);

	// Create table view sections
	Ti.API.info('Creating table section for ' + category);
	var tableSections = Ti.UI.createTableViewSection({
		headerTitle : category,
	});

	for (var i = 0; i < firearmData.array[category].length; i++) {
		var firearm;
		firearm = firearmData.array[category][i];

		// Create Row
		var theRow = Ti.UI.createTableViewRow({
			title : firearm.model,
			info : firearm
		});

		// Add row to section
		tableSections.add(theRow);
	};

	listTab.appendSection([tableSections]);

};


//Add to win3
var logoView2 = Titanium.UI.createView({
	backgroundImage : 'images/logo.png',
	top : 0,
	height : 50,
	width : 150,
});

var headerLabel = Titanium.UI.createLabel({
	text : 'ABOUT THE COMPANY',
	left : 10,
	color : '#FFCC11',
	top : 60,
	font : {
		fontSize : '20'
	}
});
var secondLabel = Titanium.UI.createLabel({
	text : 'MADE BY AMERICAN HANDS WITH PRECISION ENGINEERED PARTS.',
	left : 10,
	color : '#ffffff',
	top : 95,
	font : {
		fontWeight : 'bold',
		fontSize : '25'
	}
});

var newText = 'North Carolina. Where every PARA 1911 is born. Each a brainchild of the most innovative, influential minds in pistol design. Made by hand, on a bench, one at a time, by men as passionate about building firearms as they are about shooting them.\n\nSure, we have no shortage of state-of-the-art equipment. But a machine can’t feel. It can’t hold a pistol in its hands and know exactly what’s working, and what isn’t. Our guys can. And every PARA must go through their hands before it ever ends up in yours.\n\nCraftsmanship is the engine that runs this place. And you can feel it in every firearm that proudly wears the PARA name.';

var textEmp = Ti.UI.iOS.createAttributedString({
	text : newText,
	attributes : [{
		type : Ti.UI.iOS.ATTRIBUTE_FOREGROUND_COLOR,
		value : 'yellow',
		range : [newText.indexOf('North Carolina.'), ('North Carolina.').length]
	}]
});

var bodyLabel = Titanium.UI.createLabel({
	//	text: 'North Carolina. Where every PARA 1911 is born. Each a brainchild of the most innovative, influential minds in pistol design. Made by hand, on a bench, one at a time, by men as passionate about building firearms as they are about shooting them.\n\nSure, we have no shortage of state-of-the-art equipment. But a machine can’t feel. It can’t hold a pistol in its hands and know exactly what’s working, and what isn’t. Our guys can. And every PARA must go through their hands before it ever ends up in yours.\n\nCraftsmanship is the engine that runs this place. And you can feel it in every firearm that proudly wears the PARA name.',
	text : newText,
	left : 10,
	color : '#ffffff',
	top : 200,
	font : {
		fontSize : '12'
	}
});

//Add to win4
var logoView3 = Titanium.UI.createView({
	backgroundImage : 'images/logo.png',
	top : 0,
	height : 50,
	width : 150,
});
var specialView = Ti.UI.createImageView({
	image : 'images/Special.jpg',
	top : 50,
	enableZoomControls: true,
});

//Add to firearmContainer
var logoView4 = Titanium.UI.createView({
	backgroundImage : 'images/logo.png',
	left: 0,
	top : 0,
	height : 50,
	width : 150,
});

// add tabs to the group
tabGroup.addTab(tab1);
tabGroup.addTab(tab2);
tabGroup.addTab(tab3);
tabGroup.addTab(tab4);

// open tab group
tabGroup.open();

//add elements to windows
win1.add(logoView, scrollable, playerView);
win2.add(listTab);
win3.add(logoView2, headerLabel, secondLabel, bodyLabel);
win4.add(logoView3, specialView);
// firearmContainer.add(logoView4);
